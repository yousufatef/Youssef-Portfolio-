import { chromium } from "playwright-core";
import { readFile, mkdir } from "node:fs/promises";
import assert from "node:assert/strict";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const failures = [];
const axe = await readFile(
  new URL("../node_modules/axe-core/axe.min.js", import.meta.url),
  "utf8",
);
await mkdir("test-results", { recursive: true });
try {
  for (const viewport of [
    { width: 1920, height: 1080 },
    { width: 1440, height: 1000 },
    { width: 1024, height: 900 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
    { width: 320, height: 740 },
  ]) {
    for (const theme of ["light", "dark"]) {
      const context = await browser.newContext({
        viewport,
        colorScheme: theme,
        reducedMotion: "reduce",
      });
      const page = await context.newPage();
      page.on("pageerror", (error) => failures.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") failures.push(message.text());
      });
      const response = await page.goto("http://127.0.0.1:3000");
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForFunction(
        (theme) => document.documentElement.classList.contains(theme),
        theme,
      );
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.locator("main section").count(), 6);
      assert.equal(await page.locator(".capability").count(), 4);
      assert.equal(await page.locator(".capability p").count(), 4);
      assert.deepEqual(
        await page
          .locator(".skill-item > span:not(.skill-icon)")
          .allTextContents(),
        [
          "TypeScript",
          "JavaScript (ES6+)",
          "React.js",
          "Next.js",
          "Redux Toolkit",
          "TanStack Query",
          "Tailwind CSS",
          "Node.js",
          "NestJS",
          "Express.js",
          "RESTful API Design",
          "RBAC",
          "PostgreSQL",
          "MongoDB",
          "Multi-Tenant SaaS Architecture",
          "Reusable Component Architecture",
          "Performance Optimization",
          "Internationalization (i18n)",
          "Git",
          "GitHub",
          "Azure DevOps",
        ],
      );
      const skillLayout = await page
        .locator(".skill-item")
        .evaluateAll((items) =>
          items.every((item) => {
            const icon = item.querySelector(".skill-icon");
            const label = item.lastElementChild;
            if (!icon || !label) return false;
            const iconBounds = icon.getBoundingClientRect();
            const labelBounds = label.getBoundingClientRect();
            const itemBounds = item.getBoundingClientRect();
            return (
              iconBounds.width === 18 &&
              iconBounds.height === 18 &&
              labelBounds.left >= iconBounds.right &&
              labelBounds.right <= itemBounds.right &&
              (!icon.matches("svg") || icon.getBBox().width > 0)
            );
          }),
        );
      assert.equal(
        skillLayout,
        true,
        "Skill icons and labels must fit without overlapping",
      );
      assert.equal(
        (
          await page.request.get("http://127.0.0.1:3000/azure-devops.svg")
        ).status(),
        200,
      );
      const typography = await page.evaluate(() => {
        const size = (element) =>
          Number.parseFloat(getComputedStyle(element).fontSize);
        return {
          hero: size(document.querySelector("h1")),
          body: size(document.body),
          tinyText: [
            ...document.querySelectorAll(
              "main p, main a, main li, main h2, main h3, .eyebrow, header a",
            ),
          ]
            .filter(
              (element) =>
                element.getBoundingClientRect().height > 0 &&
                !element.classList.contains("sr-only"),
            )
            .filter((element) => size(element) < 12)
            .map((element) => element.className),
        };
      });
      assert(
        typography.hero >= 32 && typography.hero <= 48,
        "Hero type must stay within 32–48px",
      );
      assert(
        typography.body >= 14 && typography.body <= 16,
        "Body type must stay within 14–16px",
      );
      assert.deepEqual(
        typography.tinyText,
        [],
        "No tiny text across the website",
      );
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        true,
        `Overflow at ${viewport.width} ${theme}`,
      );
      const toggle = page.getByRole("button", {
        name: "Toggle light and dark theme",
      });
      await toggle.click();
      const changedTheme = theme === "light" ? "dark" : "light";
      await page.waitForFunction(
        (theme) => document.documentElement.classList.contains(theme),
        changedTheme,
      );
      await page.reload();
      await page.waitForFunction(
        (theme) => document.documentElement.classList.contains(theme),
        changedTheme,
      );
      assert.equal(
        await page.evaluate(() => localStorage.getItem("theme")),
        changedTheme,
      );
      await toggle.click();
      await page.waitForFunction(
        (theme) => document.documentElement.classList.contains(theme),
        theme,
      );
      await page.evaluate(() => document.fonts.ready);
      await page.addScriptTag({ content: axe });
      const audit = await page.evaluate(async () =>
        window.axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
        }),
      );
      assert.deepEqual(
        audit.violations.map((item) => ({
          id: item.id,
          nodes: item.nodes.map((node) => node.target),
        })),
        [],
        `Accessibility at ${viewport.width} ${theme}`,
      );
      const header = page.locator(".site-header");
      const mascot = header.locator(".developer-avatar");
      await page.waitForFunction(() => {
        const image = document.querySelector(".developer-avatar img");
        return image?.complete && image.naturalWidth > 0;
      });
      const mascotSize = viewport.width < 640 ? 40 : 48;
      assert.deepEqual(
        await mascot.evaluate((element) => {
          const bounds = element.getBoundingClientRect();
          return { width: bounds.width, height: bounds.height };
        }),
        { width: mascotSize, height: mascotSize },
      );
      assert.equal(await mascot.getAttribute("aria-hidden"), "true");
      assert.equal(await mascot.getAttribute("data-mascot-state"), "static");
      await mascot.hover();
      assert.equal(
        await mascot.getAttribute("data-mascot-state"),
        "static",
        "No fabricated character animation in static fallback",
      );
      assert.equal(
        await mascot
          .locator("img")
          .evaluate((image) => image.getAnimations().length),
        0,
      );
      assert.equal(await header.locator("nav, .menu-toggle").count(), 0);
      assert.equal(await header.getByRole("link").count(), 4);
      assert.equal(
        await page
          .locator("footer, .explore-link, .scroll-icon, .identity-title")
          .count(),
        0,
      );
      assert.equal(
        await header.evaluate((element) => getComputedStyle(element).position),
        "static",
      );
      assert.equal(
        await page
          .locator(".capability")
          .evaluateAll((items) =>
            items.every(
              (item) => getComputedStyle(item).borderTopWidth === "0px",
            ),
          ),
        true,
      );
      const containers = await page
        .locator("header .container, main.container")
        .evaluateAll((items) =>
          items.map((item) => {
            const bounds = item.getBoundingClientRect();
            return { x: bounds.x, width: bounds.width, right: bounds.right };
          }),
        );
      assert.equal(containers[0].x, containers[1].x);
      assert.equal(containers[0].width, containers[1].width);
      assert(
        containers.every(
          (item) =>
            item.width <= 1120 &&
            Math.abs(item.x - (viewport.width - item.right)) < 1,
        ),
      );
      assert.equal(
        await page.getByRole("link", { name: /get in touch/i }).count(),
        0,
      );
      assert.equal(
        await page
          .locator(".hero-topline, .hero-name, .hero-role, .edition-label")
          .count(),
        0,
      );
      assert.equal(
        await page.locator("#about > :first-child").getAttribute("id"),
        "hero-title",
      );
      assert.equal(await page.locator(".hero-actions a").count(), 1);
      const cv = page.getByRole("link", { name: "Request CV", exact: true });
      const cvHref = await cv.getAttribute("href");
      assert.equal(cvHref, "/Youssef_Atef_CV.pdf");
      assert.equal(
        await page.locator("#about a").filter({ hasText: "LinkedIn" }).count(),
        0,
      );
      assert.equal(
        await cv.evaluate(
          (element) => getComputedStyle(element).backgroundColor,
        ),
        "rgba(0, 0, 0, 0)",
      );
      const github = header.getByRole("link", {
        name: "Youssef Atef on GitHub (opens in a new tab)",
        exact: true,
      });
      assert.equal(
        await github.getAttribute("href"),
        "https://github.com/yousufatef",
      );
      assert.equal(await github.getAttribute("target"), "_blank");
      assert.equal(await github.getAttribute("rel"), "noopener noreferrer");
      if ((await cv.getAttribute("download")) !== null) {
        const pdf = await page.request.get(new URL(cvHref, page.url()).href);
        assert.equal(pdf.status(), 200);
        assert.equal((await pdf.body()).subarray(0, 5).toString(), "%PDF-");
      } else {
        assert.equal(
          cvHref,
          "mailto:youssef.atef.business@gmail.com?subject=CV%20request",
        );
      }
      assert.match(await page.locator("#stack .eyebrow").innerText(), /STACK/);
      const sectionSpacing = await page
        .locator("main .section")
        .evaluateAll((sections) =>
          sections.map((section) => {
            const style = getComputedStyle(section);
            return [
              parseFloat(style.paddingTop),
              parseFloat(style.paddingBottom),
            ];
          }),
        );
      assert(
        sectionSpacing.every((pair) =>
          pair.every((value) => value === (viewport.width < 768 ? 40 : 64)),
        ),
        "Consistent responsive section spacing",
      );
      assert.equal(await page.locator(".hero-note").isVisible(), true);
      assert.equal(
        await header.locator(".identity-name").innerText(),
        "Hey, I’m Youssef Atef.",
      );
      const timeline = await page
        .locator(".experience-list")
        .evaluate((list) => {
          const spine = getComputedStyle(list, "::before");
          const spineX =
            list.getBoundingClientRect().left + parseFloat(spine.left);
          const branches = [
            ...list.querySelectorAll(".experience-content"),
          ].map((content) => {
            const branch = getComputedStyle(content, "::before");
            return {
              x: content.getBoundingClientRect().left + parseFloat(branch.left),
              width: parseFloat(branch.width),
              height: parseFloat(branch.height),
              color: branch.backgroundColor,
            };
          });
          return {
            spineX,
            width: parseFloat(spine.width),
            color: spine.backgroundColor,
            branches,
          };
        });
      assert.equal(timeline.width, 1);
      assert.equal(timeline.branches.length, 2);
      assert.notEqual(
        timeline.branches[0].color,
        timeline.branches[1].color,
        "Company-specific connector colors",
      );
      for (const branch of timeline.branches) {
        assert(
          Math.abs(branch.x - timeline.spineX) < 1,
          "Connector must join the spine",
        );
        assert.equal(branch.width, 16);
        assert.equal(branch.height, 1);
        assert.notEqual(branch.color, "rgba(0, 0, 0, 0)");
      }
      assert.equal(await page.locator(".responsibilities li").count(), 10);
      assert.equal(
        await header.locator(".header-identity").getAttribute("href"),
        "#top",
      );
      const linkedIn = header.getByRole("link", {
        name: "Youssef Atef on LinkedIn (opens in a new tab)",
        exact: true,
      });
      assert.equal(
        await linkedIn.getAttribute("href"),
        "https://linkedin.com/in/youssef-atef-elagamy",
      );
      assert.equal(await linkedIn.getAttribute("target"), "_blank");
      assert.equal(await linkedIn.getAttribute("rel"), "noopener noreferrer");
      assert.equal(
        await header
          .getByRole("link", { name: "Email Youssef Atef", exact: true })
          .getAttribute("href"),
        "mailto:youssef.atef.business@gmail.com",
      );
      const headerLayout = await header.evaluate((element) => {
        const identity = element
          .querySelector(".header-identity")
          .getBoundingClientRect();
        const actions = element
          .querySelector(".header-actions")
          .getBoundingClientRect();
        return {
          identityBottom: identity.bottom,
          actionsTop: actions.top,
          actionsLeft: actions.left,
          actionsRight: actions.right,
          identityRight: identity.right,
        };
      });
      assert(
        headerLayout.actionsTop >= headerLayout.identityBottom ||
          headerLayout.actionsLeft > headerLayout.identityRight,
        "Header identity and actions must not overlap",
      );
      assert(
        headerLayout.actionsRight <= viewport.width,
        "Header actions must fit the viewport",
      );
      await header.screenshot({
        path: `test-results/${viewport.width}-${theme}-header.png`,
      });
      await page.locator("#contact").scrollIntoViewIfNeeded();
      assert(
        await header.evaluate(
          (element) => element.getBoundingClientRect().bottom < 0,
        ),
        "Header must scroll offscreen",
      );
      await header.locator(".header-identity").click();
      assert.equal(new URL(page.url()).hash, "#top");
      assert.equal(
        await page.locator(".contact-email").getAttribute("href"),
        "mailto:youssef.atef.business@gmail.com",
      );
      assert.equal(
        await page.locator('a[href="tel:+201115737646"]').count(),
        1,
      );
      await page.goto("http://127.0.0.1:3000");
      await page.keyboard.press("Tab");
      assert.equal(
        await page.evaluate(() => document.activeElement.textContent),
        "Skip to content",
      );
      for (const selector of [
        ".header-identity",
        ".header-socials a:nth-child(1)",
        ".header-socials a:nth-child(2)",
        ".header-socials a:nth-child(3)",
        ".theme-toggle",
      ]) {
        await page.keyboard.press("Tab");
        assert.equal(
          await page
            .locator(selector)
            .evaluate((element) => element === document.activeElement),
          true,
          `Keyboard focus: ${selector}`,
        );
      }
      assert.equal(
        await page.evaluate(
          () => getComputedStyle(document.documentElement).scrollBehavior,
        ),
        "auto",
      );
      await page.locator("#contact").scrollIntoViewIfNeeded();
      await page.evaluate(
        () =>
          document.activeElement instanceof HTMLElement &&
          document.activeElement.blur(),
      );
      await page.locator("#what-i-bring").screenshot({
        path: `test-results/${viewport.width}-${theme}-capabilities.png`,
        style: ".site-header, .skip-link { visibility: hidden !important; }",
      });
      await page.locator("#stack").screenshot({
        path: `test-results/${viewport.width}-${theme}-skills.png`,
        style: ".site-header, .skip-link { visibility: hidden !important; }",
      });
      await page.locator("#experience").screenshot({
        path: `test-results/${viewport.width}-${theme}-experience.png`,
        style: ".skip-link { visibility: hidden !important; }",
      });
      await page.locator("#about").scrollIntoViewIfNeeded();
      await page.locator("h1").click();
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: `test-results/${viewport.width}-${theme}-viewport.png`,
      });
      await page.screenshot({
        path: `test-results/${viewport.width}-${theme}.png`,
        fullPage: true,
      });
      console.log(
        `PASS ${viewport.width}px ${theme}: identity header, social/contact links, keyboard order, theme persistence, skills, typography, layout, reduced motion, axe`,
      );
      await context.close();
    }
  }
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000");
  await page.locator(".developer-avatar").hover();
  assert.equal(
    await page.locator(".developer-avatar").getAttribute("data-mascot-state"),
    "static",
  );
  const asset = await page.request.get(
    "http://127.0.0.1:3000/mascot/developer-static.webp",
  );
  assert.equal(asset.status(), 200);
  assert(
    (await asset.body()).length < 12000,
    "Mascot runtime asset should remain below 12KB",
  );
  await page.locator("#what-i-bring").scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  assert.equal(await page.locator(".capability").first().isVisible(), true);
  await context.close();
  for (const width of [1440, 390]) {
    const fallback = await browser.newPage({
      viewport: { width, height: 900 },
    });
    await fallback.route("**/mascot/developer-static.webp", (route) =>
      route.abort(),
    );
    await fallback.goto("http://127.0.0.1:3000");
    await fallback.locator(".mascot-initials").waitFor();
    assert.equal(
      await fallback
        .locator(".developer-avatar")
        .getAttribute("data-mascot-state"),
      "initials",
    );
    assert.equal(
      await fallback
        .locator(".developer-avatar")
        .evaluate((element) => element.getBoundingClientRect().width),
      width < 640 ? 40 : 48,
    );
    await fallback.locator(".header-identity").click();
    assert.equal(new URL(fallback.url()).hash, "#top");
    await fallback.close();
  }
  console.log(
    "PASS mascot static/hover/reduced-motion behavior, <12KB runtime asset, and desktop/mobile image-failure fallback",
  );
  assert.deepEqual(failures, [], "Browser console/runtime errors");
  console.log("PASS standard-motion smoke check; no browser runtime errors");
} finally {
  await browser.close();
}

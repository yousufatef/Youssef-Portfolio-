import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siGithub } from "simple-icons";
import { DeveloperAvatar } from "@/components/ui/developer-avatar";
import { developerAvatarAssets } from "@/data/developer-avatar";

export function PersonalHeader() {
  return (
    <header id="top" className="site-header">
      <div className="container header-inner">
        <a
          className="header-identity"
          href="#top"
          aria-label={`${profile.name}, back to top`}
        >
          <DeveloperAvatar {...developerAvatarAssets} />
          <span className="identity-name">
            Hey, I’m <span>{profile.name}.</span>
          </span>
        </a>
        <div
          className="header-actions"
          role="group"
          aria-label="Professional links and contact"
        >
          <div className="header-socials">
            {profile.github && (
              <a
                className="icon-button"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youssef Atef on GitHub (opens in a new tab)"
                title="GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={siGithub.path} />
                </svg>
              </a>
            )}
            <a
              className="icon-button"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youssef Atef on LinkedIn (opens in a new tab)"
              title="LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="2"
                  fill="currentColor"
                />
                <g fill="var(--background)">
                  <circle cx="7" cy="7" r="1.4" />
                  <path d="M5.8 10h2.4v8H5.8zM10.5 10h2.3v1.1c.5-.8 1.3-1.3 2.5-1.3 2.2 0 3 1.4 3 3.6V18h-2.4v-4.2c0-1.2-.3-1.9-1.4-1.9-1.2 0-1.6.9-1.6 2V18h-2.4z" />
                </g>
              </svg>
            </a>
            <a
              className="icon-button"
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
              title="Email"
            >
              <Mail size={18} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

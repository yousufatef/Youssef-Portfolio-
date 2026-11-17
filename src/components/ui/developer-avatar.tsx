"use client";

/* eslint-disable @next/next/no-img-element -- Native images preserve animated WebP frames and serve the tiny local assets without an image optimization runtime. */
import { useCallback, useEffect, useRef, useState } from "react";
import type { DeveloperAvatarAssets } from "@/data/developer-avatar";

export function DeveloperAvatar({
  staticSrc,
  idleSrc,
  hoverSrc,
}: DeveloperAvatarAssets) {
  const container = useRef<HTMLSpanElement>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [failedSources, setFailedSources] = useState<string[]>([]);

  useEffect(() => {
    // The shipped static fallback starts no observers or animation work.
    if ((!idleSrc && !hoverSrc) || !container.current) return;
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let visible = false;
    const update = () =>
      setCanAnimate(motion.matches && visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(container.current);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [idleSrc, hoverSrc]);

  const candidates = [
    canAnimate && hovered ? hoverSrc : null,
    canAnimate ? idleSrc : null,
    staticSrc,
  ];
  const source = candidates.find(
    (candidate): candidate is string =>
      typeof candidate === "string" && !failedSources.includes(candidate),
  );
  const markFailed = useCallback((failedSource: string) => {
    setFailedSources((previous) =>
      previous.includes(failedSource) ? previous : [...previous, failedSource],
    );
  }, []);
  const imageRef = useCallback(
    (image: HTMLImageElement | null) => {
      // A cached/broken SSR image can fail before React attaches onError.
      if (source && image?.complete && image.naturalWidth === 0)
        markFailed(source);
    },
    [source, markFailed],
  );

  return (
    <span
      ref={container}
      className="identity-avatar developer-avatar"
      aria-hidden="true"
      data-mascot-state={
        !source
          ? "initials"
          : source === staticSrc
            ? "static"
            : source === hoverSrc
              ? "hover"
              : "idle"
      }
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onPointerCancel={() => setHovered(false)}
    >
      {source ? (
        <img
          ref={imageRef}
          src={source}
          alt=""
          width={192}
          height={192}
          decoding="async"
          loading="eager"
          draggable={false}
          onError={() => markFailed(source)}
        />
      ) : (
        <span className="mascot-initials">YA</span>
      )}
    </span>
  );
}

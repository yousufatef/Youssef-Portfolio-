export interface DeveloperAvatarAssets {
  staticSrc: string;
  idleSrc: string | null;
  hoverSrc: string | null;
}

// Add only genuine character animation assets. The generated render is static.
export const developerAvatarAssets: DeveloperAvatarAssets = {
  staticSrc: "/mascot/developer-static.webp",
  idleSrc: null,
  hoverSrc: null,
};

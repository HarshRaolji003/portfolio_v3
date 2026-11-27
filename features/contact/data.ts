export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "gitlab";
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/HarshRaolji003",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-raolji",
    icon: "linkedin",
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/RaoljiHarsh003",
    icon: "gitlab",
  },
];

export const CONTACT_EMAIL = "harshraolji2003@gmail.com";

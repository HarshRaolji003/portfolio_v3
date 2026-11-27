import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "../data";
import { GitHubIcon, LinkedInIcon, GitLabIcon } from "./SocialIcons";

const ICON_MAP = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  gitlab: GitLabIcon,
} as const;

/**
 * Vertical list of social profile links with brand icons and ArrowUpRight hover animation.
 */
export function SocialLinks() {
  return (
    <ul role="list" className="divide-y divide-border-subtle">
      {SOCIAL_LINKS.map(({ label, href, icon }) => {
        const Icon = ICON_MAP[icon];
        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 items-center gap-3 py-3 text-text-primary transition-colors duration-200 ease-out hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <Icon className="size-5 shrink-0" />
              <span>{label}</span>
              <span className="sr-only">(opens in new tab)</span>
              <ArrowUpRight
                aria-hidden="true"
                className="ml-auto size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0 motion-reduce:group-focus-visible:translate-x-0 motion-reduce:group-focus-visible:translate-y-0"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

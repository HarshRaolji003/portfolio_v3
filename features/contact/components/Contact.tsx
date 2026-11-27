import { CONTACT_EMAIL } from "../data";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

/**
 * Contact section with heading statement, mailto body, form card, and social links.
 */
export function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="pt-8 pb-(--section-y) focus:outline-none md:pt-10"
    >
      <div className="mx-auto w-full max-w-(--container-max) px-5 md:px-8">
        {/* Eyebrow */}
        <p className="font-mono text-small uppercase tracking-[0.14em] text-text-secondary">
          CONTACT
        </p>

        {/* Heading */}
        <h2
          id="contact-heading"
          className="mt-3 font-sans text-display font-bold leading-[1.1] tracking-tight text-text-primary"
        >
          Tell me about the role and the part of the system that worries you.
        </h2>

        {/* Two-column layout: form + body/social links */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-8 md:col-span-2">
            <p className="font-sans text-body-lg text-text-secondary">
              I&apos;m open to full-stack and AI-integrated product work. I read
              everything and usually reply within a day. Prefer email?{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-text-primary underline decoration-primary decoration-1 underline-offset-4 transition-colors duration-200 hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

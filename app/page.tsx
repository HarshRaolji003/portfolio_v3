import { Hero } from "@/features/hero";
import { About } from "@/features/about";
import { Skills } from "@/features/skills";
import { Contact } from "@/features/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

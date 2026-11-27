import { Header } from "@/features/header";
import { Hero } from "@/features/hero";
import { About } from "@/features/about";
import { Skills } from "@/features/skills";
import { Contact } from "@/features/contact";
import { Footer } from "@/shared/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

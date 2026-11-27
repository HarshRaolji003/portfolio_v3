import { Header } from "@/features/header";
import { Hero } from "@/features/hero";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import { NotFound } from "@/features/not-found";

export const metadata: Metadata = {
  title: "Page not found | Harsh Raolji",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}

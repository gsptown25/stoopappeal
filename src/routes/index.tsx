import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/landing/home-page";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Stoop Appeal — The Gathering" },
      {
        name: "description",
        content:
          "Portland's porch concierge. The Gathering and The Harvest — designed, delivered, styled, and collected.",
      },
    ],
  }),
});

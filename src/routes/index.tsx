import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/landing/home-page";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Stoop Appeal — Fall Harvest Deluxe" },
      {
        name: "description",
        content:
          "Portland's porch concierge. One offering: the Fall Harvest Deluxe — designed, delivered, styled, and collected.",
      },
    ],
  }),
});

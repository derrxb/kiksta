"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      posthog.init("phc_WpJw40xWNMEh6QuqBiUCiy7X3zXFvlOH0R1ozIpbRng", {
        api_host: "https://app.posthog.com",
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

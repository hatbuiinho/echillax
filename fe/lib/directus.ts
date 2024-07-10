import { CustomDirectusTypes } from "@/types/directusType";
import { createDirectus, rest, staticToken } from "@directus/sdk";

export const directusClient = createDirectus<CustomDirectusTypes>(
  process.env.NEXT_PUBLIC_SERVER_HOST || "http://localhost:8055",
)
  .with(
    staticToken(
      process.env.DIRECTUS_TOKEN ??
        process.env.NEXT_PUBLIC_DIRECTUS_TOKEN ??
        "unknown",
    ),
  )
  .with(rest());

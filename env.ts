import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
    server: {
        AIRTABLE_ACCESS_TOKEN: z.string().min(1),
        AIRTABLE_BASE_ID: z.string().min(1),
    },
    client: {
        AIRTABLE_ACCESS_TOKEN: z.string().min(1),
        AIRTABLE_BASE_ID: z.string().min(1),
    },
    runtimeEnv: process.env,
    runtime: {
        AIRTABLE_ACCESS_TOKEN: process.env.AIRTABLE_ACCESS_TOKEN,
        AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    },
})
"use client";

import { OpenAPI } from "./generated";

OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

console.log("[OpenAPI] BASE =", OpenAPI.BASE);

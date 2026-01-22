import { z } from "zod";

/**
 * ============================
 * Client-side env
 * ============================
 * ⚠️ 반드시 NEXT_PUBLIC_ prefix
 */
export const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_ENV: z.enum(["local", "dev", "qa", "prod"]),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

/**
 * 브라우저에 노출되는 env 검증
 * - NEXT_PUBLIC_* 만 대상
 */
export const clientEnv = (() => {
  const parsed = clientEnvSchema.safeParse({
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });

  if (!parsed.success) {
    console.error("❌ Invalid client environment variables");
    console.error(parsed.error.format());
    throw new Error("Invalid client environment");
  }

  return parsed.data;
})();

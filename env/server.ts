import { z } from "zod";

/**
 * ============================
 * Server-side env
 * ============================
 */
export const serverEnvSchema = z.object({
  APP_ENV: z.enum(["local", "dev", "qa", "prod"]),

  OPENAPI_URL: z.string().url().optional(),
  OPENAPI_SNAPSHOT_PATH: z.string().optional(),

  ORVAL_SOURCE: z.enum(["snapshot", "remote"]).optional(),
  ORVAL_OUTPUT_DIR: z.string().optional(),
  ORVAL_SCHEMA_DIR: z.string().optional(),
});
/**
 * 서버 전용 env 검증
 * - 빌드 시점 / 서버 시작 시 실행
 * - 누락되면 즉시 crash
 */
export const serverEnv = (() => {
  const parsed = serverEnvSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error("❌ Invalid server environment variables");
    console.error(parsed.error.format());
    throw new Error("Invalid server environment");
  }

  return parsed.data;
})();

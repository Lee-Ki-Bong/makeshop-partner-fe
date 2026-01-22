import { defineConfig } from "orval";
import { removeBrokenPaths } from "./api/openapi/removeBrokenPaths";

/**
 * 실행 환경
 */
const APP_ENV = process.env.APP_ENV;

/**
 * Orval 동작 모드
 */
const ORVAL_SOURCE = process.env.ORVAL_SOURCE;

/**
 * OpenAPI 스펙 경로 결정
 */
const OPENAPI_SOURCE =
  ORVAL_SOURCE === "remote"
    ? process.env.OPENAPI_URL
    : process.env.OPENAPI_SNAPSHOT_PATH;

if (!OPENAPI_SOURCE) {
  throw new Error("❌ OPENAPI_SOURCE is not defined");
}

/**
 * 출력 경로
 */
const OUTPUT_DIR = process.env.ORVAL_OUTPUT_DIR;
const SCHEMA_DIR = process.env.ORVAL_SCHEMA_DIR;

export default defineConfig({
  "partner-api": {
    input: {
      target: OPENAPI_SOURCE,
      filters: {
        tags: undefined, // 모든 태그 포함, 특정 태그만 포함하려면 배열로 지정 e.g., ['User', 'Product']
      },
      override: {
        transformer: removeBrokenPaths,
      },
    },
    output: {
      mode: "tags-split", // @TODO: OpenAPI tag 한글 문제로 인한 임시 조치 필요
      target: OUTPUT_DIR,
      schemas: SCHEMA_DIR,
      client: "react-query",
      mock: true,
      prettier: true,
      override: {
        mutator: {
          path: "api/openapi/client.ts", // Orval이 import 구문을 생성할 때 사용하는 실제 mutator 파일 경로 (빌드 타임 기준, env 사용 금지)
          name: "customInstanceMutator",
        },
        query: {
          useQuery: true,
          useMutation: true,
          useInfinite: false,
          signal: true,
        },
      },
    },
    hooks: {
      afterAllFilesWrite: "npx prettier --write",
    },
  },
});

import type { OpenAPIObject } from "openapi3-ts/oas30";

/**
 * OpenAPI 스펙에서
 * - 백엔드 스펙 오류로 인해
 * - 프론트 코드 생성이 불가능한 path 제거
 *
 * ⚠️ 임시 우회용
 */
export function removeBrokenPaths(spec: OpenAPIObject): OpenAPIObject {
  const brokenPaths = [
    "/uploads/users/{userId}/{filename}",
    // 필요 시 추가
  ];

  console.log("[orval][transform] removeBrokenPaths called");

  brokenPaths.forEach((path) => {
    if (spec.paths?.[path]) {
      delete spec.paths[path];
      console.log("[orval][transform] deleted:", path);
    }
  });

  return spec;
}

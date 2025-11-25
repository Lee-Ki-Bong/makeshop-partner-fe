import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** 경로 설정 */
const openapiPath = path.join(__dirname, "../api/openapi.ts");
const outputPath = path.join(__dirname, "../api/generated-api.ts");

/** OpenAPI 파일 읽기 */
const file = fs.readFileSync(openapiPath, "utf-8");

/** paths 블록 추출 */
const match = file.match(
  /export interface paths([\s\S]*?)export interface operations/
);

if (!match) {
  console.error("paths 타입을 찾을 수 없습니다.");
  process.exit(1);
}

const pathsBlock = match[1];

/** Route 추출용 정규식 */
const routeRegex =
  /"([^"]+)":\s*{[\s\S]*?\b(get|post|put|delete|patch)\b\s*:/gi;

let routes = [];
let m;

while ((m = routeRegex.exec(pathsBlock)) !== null) {
  routes.push({
    path: m[1],
    method: m[2].toUpperCase(),
  });
}

/* ================================================================
   Path → PascalCase 변환
================================================================ */

function toPascalCase(str) {
  return str
    .replace(/[:{}]/g, "") // :id → id
    .split(/[-_]/g)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function pathToFuncName(method, path) {
  const segments = path.split("/").filter(Boolean);
  const pascal = segments.map(toPascalCase).join("") || "Root";
  return method.toLowerCase() + pascal;
}

/* ================================================================
   axiosInstance 호출용 코드 만들기
================================================================ */

function buildAxiosCall(method, route) {
  switch (method) {
    case "GET":
    case "DELETE":
      return `
export const ${pathToFuncName(
        method,
        route
      )} = async (params?: any): Promise<any> => {
  return axiosInstance.${method.toLowerCase()}("${route}", { params })
    .then(res => res.data)
    .catch(error => { throw error; });
};
`;
    case "POST":
    case "PUT":
    case "PATCH":
      return `
export const ${pathToFuncName(
        method,
        route
      )} = async (body?: any, params?: any): Promise<any> => {
  return axiosInstance.${method.toLowerCase()}("${route}", body, { params })
    .then(res => res.data)
    .catch(error => { throw error; });
};
`;
    default:
      return "";
  }
}

/* ================================================================
   출력 파일 생성
================================================================ */

let content = `
/* AUTO GENERATED — DO NOT EDIT */
import { axiosInstance } from "./axios-instance";
`;

routes.forEach(({ method, path }) => {
  content += buildAxiosCall(method, path);
});

fs.writeFileSync(outputPath, content);
console.log(`✨ Axios API 생성 완료 → ${outputPath}`);

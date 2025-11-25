import { Project, SyntaxKind } from "ts-morph";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const openapiPath = path.join(__dirname, "../api/openapi.ts");
const outPath = path.join(__dirname, "../api/schemas.ts");

/* ==========================================
   Load openapi.ts
========================================== */
const project = new Project({
  compilerOptions: { allowJs: true },
});

const source = project.addSourceFileAtPath(openapiPath);

/* ==========================================
   Find `export interface components`
========================================== */

const componentsInterface = source.getInterface("components");
if (!componentsInterface) {
  console.error("❌ components 인터페이스를 찾을 수 없습니다.");
  process.exit(1);
}

/* ==========================================
   Inside components → find schemas
========================================== */

const componentsProps = componentsInterface.getProperties();

let schemasTypeNode = null;

for (const prop of componentsProps) {
  if (prop.getName() === "schemas") {
    schemasTypeNode = prop.getTypeNode();
    break;
  }
}

if (!schemasTypeNode) {
  console.error("❌ components.schemas 를 찾을 수 없습니다.");
  process.exit(1);
}

if (schemasTypeNode.getKind() !== SyntaxKind.TypeLiteral) {
  console.error("❌ schemas 가 TypeLiteral 형태가 아닙니다.");
  process.exit(1);
}

const schemaMembers = schemasTypeNode.getMembers();

/* ==========================================
   Extract each schema into its own interface
========================================== */

let out = `/* AUTO GENERATED — DO NOT EDIT */\n\n`;

for (const m of schemaMembers) {
  const name = m.getName();

  const typeNode = m.getTypeNode();
  if (!typeNode) continue;

  const typeText = typeNode.getText();

  out += `export interface ${name} ${typeText}\n\n`;
}

/* ==========================================
   Write to file
========================================== */
fs.writeFileSync(outPath, out);

console.log("✨ components.schemas 추출 완료 → api/schemas.ts");

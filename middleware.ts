import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("partner-center.sid")?.value;

  // 보호해야 하는 모든 경로
  const protectedRoutes = ["/", "/dashboard"];

  // 현재 요청 경로
  const pathname = req.nextUrl.pathname;

  if (protectedRoutes.includes(pathname)) {
    if (!session) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};

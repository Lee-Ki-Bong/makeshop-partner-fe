import AuthResultPanel from "@/components/auth-result-panel";
import { GalleryVerticalEnd } from "lucide-react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* 왼쪽 사이드 */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* 로고 */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Partner Center
          </a>
        </div>

        {/* 페이지별 콘텐츠 */}
        <div className="flex flex-1 items-center justify-center">
          {children}
        </div>
      </div>

      {/* 오른쪽 사이드 */}
      <div className="bg-muted relative hidden lg:block h-screen">
        <AuthResultPanel />
      </div>
    </div>
  );
}

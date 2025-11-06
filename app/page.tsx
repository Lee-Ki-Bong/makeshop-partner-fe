import AuthResultPanel from "@/components/auth-result-panel";
import LoginButtonWrapper from "@/components/login-button-wrapper";
import { GalleryVerticalEnd } from "lucide-react";

export default function Home() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* 왼쪽 사이드: 로그인 버튼 및 로고 */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* 로고 영역 */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Partner Center
          </a>
        </div>

        {/* 로그인 버튼 */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginButtonWrapper /> {/* 로그인 버튼 추가 */}
          </div>
        </div>

        {/* 회원가입 버튼 및 기타 링크가 필요할 경우 추가 */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline hover:text-primary">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* 오른쪽 사이드: 요청 결과 화면 */}
      <div className="bg-muted relative hidden lg:block h-screen">
        <AuthResultPanel />
      </div>
    </div>
  );
}

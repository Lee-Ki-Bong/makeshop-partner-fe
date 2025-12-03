"use client";

import { SignInButton } from "@/components/signin-button";
import { SignUpButton } from "./signup-button";

export default function AuthButtonWrapper() {
  return (
    <div className="space-y-3">
      {/* 로그인 버튼 */}
      <SignInButton />

      {/* 회원가입 버튼 */}
      <SignUpButton />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { useStartOAuth } from "@/hooks/useStartOAuth";

export function SignInButton() {
  const { mutate: startOAuth, isPending } = useStartOAuth();

  return (
    <Button
      className="w-full"
      onClick={() => startOAuth()}
      disabled={isPending}
    >
      {isPending ? "Loading..." : "로그인"}
    </Button>
  );
}

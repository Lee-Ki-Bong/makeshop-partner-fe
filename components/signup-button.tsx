"use client";

import { Button } from "@/components/ui/button";
import { useStartOAuth } from "@/hooks/useStartOAuth";

export function SignUpButton() {
  const { mutate: startOAuth, isPending } = useStartOAuth("signup");

  return (
    <Button
      className="w-full"
      onClick={() => startOAuth()}
      disabled={isPending}
      variant="secondary"
    >
      {isPending ? "Loading..." : "회원가입"}
    </Button>
  );
}

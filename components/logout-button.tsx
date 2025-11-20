"use client";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useLogout";

export function LogoutButton() {
  const { mutate: endOAuth, isPending } = useLogout();

  return (
    <Button className=" w-40" onClick={() => endOAuth()} disabled={isPending}>
      {isPending ? "Loading..." : "로그아웃"}
    </Button>
  );
}

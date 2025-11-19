"use client";

import { useMe } from "@/hooks/useMe";

export default function Home() {
  const { data, isLoading } = useMe();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

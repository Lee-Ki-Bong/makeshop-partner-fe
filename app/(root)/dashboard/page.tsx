"use client";

import { useMe } from "@/hooks/useMe";

export default function DashboardPage() {
  const { data, isLoading } = useMe();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
}

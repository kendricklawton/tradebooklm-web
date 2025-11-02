"use client";

import { useStore } from "@/hooks/useStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  const { isLoading, setIsLoading } = useStore();

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
    console.error(error);
  }, [error, isLoading, setIsLoading]);

  return (
    <div className="flex h-svh w-full flex-col items-center justify-center text-center gap-4">
      <h1 className="text-5xl">Error</h1>
      <p>{error.message}</p>
      <button
        className="text-white px-4 py-3 text-2xl bg-black hover:bg-gray-600 rounded-4xl cursor-pointer"
        onClick={() => router.back()}
      >
        Go back
      </button>
    </div>
  );
}

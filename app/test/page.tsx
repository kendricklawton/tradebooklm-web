"use client";

import { useState } from "react";
// import { getTestService } from "@/lib/apiService";

export default function Page() {
  const [testData, setTestData] = useState<string>();

  const handleFetchTestData = async () => {
    try {
      const data = await fetch(`/api/test`, {
        method: "GET",
      });
      const response = await data.json();
      setTestData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <button
        className="px-4 py-3 text-2xl bg-black hover:bg-gray-600 rounded-4xl text-white"
        onClick={handleFetchTestData}
      >
        Fetch Data
      </button>
      {testData ? JSON.stringify(testData) : "No data available."}
    </div>
  );
}

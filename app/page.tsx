import Overview from "@/app/Overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TradebookLM | The AI Tradebook Platform",
  description:
    "Document your trades, analyze patterns, and gain intelligent insights across all asset classes. Leverage advanced AI models to uncover hidden opportunities and optimize your trading strategy.",
};

export default function Page() {
  return <Overview />;
}

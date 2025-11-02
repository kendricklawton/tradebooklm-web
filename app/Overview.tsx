import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSignInUrl, withAuth } from "@workos-inc/authkit-nextjs";

const Overview = async () => {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();

  return (
    <div className="flex flex-col">
      <Header />
      <section className="flex flex-col relative w-full  justify-center items-center text-center min-h-[calc(100svh-4rem)]">
        <div className="max-w-5xl space-y-6 flex flex-col">
          <div className="text-slate-500 font-medium uppercase tracking-wider">
            AI Powered Trading Journal
          </div>
          <h1 className="text-6xl font-light leading-tight text-slate-800">
            TradebookLM
          </h1>
          <Link
            href={user ? "/dashboard" : signInUrl}
            className="px-4 py-3 text-2xl bg-black hover:bg-gray-600 rounded-4xl"
          >
            <span className="text-white">Try TradebookLM</span>
          </Link>
          <Link
            href="/test"
            className="px-4 py-3 text-2xl bg-black hover:bg-gray-600 rounded-4xl"
          >
            <span className="text-white">Route To Test</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Overview;

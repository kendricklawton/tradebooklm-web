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
        <div className="max-w-5xl space-y-6">
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
        </div>
      </section>

      {/*<div className="px-[4svw] flex flex-col">
        <section className="w-full flex flex-col md:flex-row items-start justify-between  py-16 border-b border-gray-200">
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <h2 className="text-5xl text-slate-800 font-light">
              AI Intelligence
            </h2>
          </div>
          <div className="flex-1 max-w-3xl md:ml-16 space-y-8">
            <p className="text-slate-600 leading-relaxed text-lg">
              Transform your trading journal with advanced AI models including
              GPT, Claude, and Gemini. Our intelligent system analyzes your
              trade data, identifies patterns, and provides actionable insights
              through natural language conversations.
            </p>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-800">
                Key features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Chat with your trading data using natural language queries
                    and get instant insights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Choose between GPT, Claude, Gemini, and other leading AI
                    models for different perspectives
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Automated pattern recognition and intelligent
                    recommendations for trade optimization
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row items-start justify-between  py-16 border-b border-gray-200">
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <h2 className="text-5xl text-slate-800 font-light">
              Journal Trades
            </h2>
          </div>

          <div className="flex-1 max-w-3xl md:ml-16 space-y-8">
            <p className="text-slate-600 leading-relaxed text-lg">
              Create organized tradebooks to systematically record, track, and
              analyze all your trading positions. Our comprehensive journaling
              system helps you maintain detailed records and identify
              performance patterns across different strategies and timeframes.
            </p>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-800">
                Key features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Detailed trade entry forms with custom fields for your
                    trading strategy
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Automatic P&L calculation and position tracking across
                    multiple assets
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Trade tagging and categorization for strategy-specific
                    analysis
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col md:flex-row items-start justify-between  py-16">
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <h2 className="text-5xl text-slate-800 font-light">
              Advanced Analytics
            </h2>
          </div>
          <div className="flex-1 max-w-3xl md:ml-16 space-y-8">
            <p className="text-slate-600 leading-relaxed text-lg">
              Access comprehensive analytics and real-time charts to optimize
              your trading strategy. Our advanced metrics help you understand
              your performance patterns, risk exposure, and identify areas for
              improvement.
            </p>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-800">
                Key features
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Real-time performance dashboards with customizable metrics
                    and KPIs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Advanced charting tools with technical indicators and
                    pattern recognition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-slate-600 leading-relaxed">
                    Risk analysis tools including drawdown tracking and
                    volatility metrics
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>*/}

      {/*<section
        className="relative flex flex-col px-[4svw] min-h-[calc(100svh-4rem)]"
        style={{
          background:
            "linear-gradient(180deg,#fff 0%, #f0f4f8 50%, #F7F9FB 70%, #Fff 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 pt-16 text-center ">
          <h2 className="text-5xl font-light text-slate-800 mb-4">
            Privacy & Security
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We value your privacy and maintain the highest standards of data
            security. TradebookLM does not use your personal data, including
            your trade records, queries, and AI responses for training our
            models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8 pb-16 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Data Protection
            </h3>
            <p className="text-slate-600">
              Your trade data is never used for AI model training
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Enterprise Security
            </h3>
            <p className="text-slate-600">
              Industry-standard encryption protects all data transmission
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Full Control
            </h3>
            <p className="text-slate-600">
              Complete data ownership with export and deletion options
            </p>
          </div>
        </div>
      </section>*/}

      <Footer />
    </div>
  );
};

export default Overview;

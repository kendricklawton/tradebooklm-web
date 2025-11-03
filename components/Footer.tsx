import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-start px-[4svw] bg-gray-50">
      {/*<div className="flex flex-row justify-start w-full space-x-4 pb-8 pt-16">
        <ul className="flex flex-col gap-2 min-w-32">
          <h3 className="text-xl">Product</h3>
          <li>
            <Link
              href="/pricing"
              className="hover:underline underline-offset-4 text-slate-700"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="hover:underline underline-offset-4 text-slate-700"
            >
              Support
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 min-w-32">
          <h3 className="text-xl">Legal</h3>
          <li>
            <Link
              href="/legal/privacy"
              className="hover:underline underline-offset-4 text-slate-700"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/legal/terms"
              className="hover:underline underline-offset-4 text-slate-700"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="/legal/data-use"
              className="hover:underline underline-offset-4 text-slate-700"
            >
              Data Use
            </Link>
          </li>
          <li>
            <Link
              href="/legal/security"
              className="hover:underline underline-offset-4 text-slate-700"
            >
              Security
            </Link>
          </li>
        </ul>
      </div>*/}

      <div className="min-h-16 flex items-center">
        <p>
          © 2025{" "}
          <Link
            href="https://machinename.dev"
            className="hover:underline underline-offset-4"
            target="_blank"
          >
            Machine Name LLC
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { getSignInUrl, withAuth } from "@workos-inc/authkit-nextjs";
import { signOut } from "@workos-inc/authkit-nextjs";

export default async function Header() {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();

  return (
    <header className="flex items-center justify-between min-h-16 w-full sticky top-0 z-50 bg-white px-[4svw]">
      <Link
        href={user ? "/dashboard" : "/"}
        className="transition-transform duration-200 hover:scale-105"
        scroll={false}
      >
        <h2 className="text-2xl">TradebookLM</h2>
      </Link>
      <div>
        {user ? (
          <form
            action={async () => {
              await signOut();
            }}
          >
            <button
              type="submit"
              className="py-2 px-4 bg-black  text-white rounded-4xl hover:bg-gray-500 cursor-pointer"
            >
              Sign out
            </button>
          </form>
        ) : (
          <Link href={signInUrl}>
            <span className="py-2 px-4 bg-black  text-white rounded-4xl hover:bg-gray-500 cursor-pointer">
              Sign in
            </span>
          </Link>
        )}
      </div>
    </header>
  );
}

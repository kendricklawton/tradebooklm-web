import Header from "@/components/Header";
import { withAuth } from "@workos-inc/authkit-nextjs";

export default async function DashboardPage() {
  const { user } = await withAuth();

  // Protect the route. If the user is not authenticated, you can redirect them.
  // Although the middleware should handle this, it's good practice for sensitive pages.
  if (!user) {
    // In a real app, you'd redirect. For now, we'll just show a message.
    // Or, you can rely on your middleware to handle the redirect.
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex w-full flex-col overflow-y-auto justify-start h-[calc(100svh-4rem)] px-[4svw]">
          <h1 className="text-4xl py-16">
            Access Denied: User Not Authenticated
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex w-full flex-col overflow-y-auto justify-start h-[calc(100svh-4rem)] px-[4svw]">
        <h1 className="text-4xl py-16">My Tradebooks</h1>
        <p>Welcome to your dashboard, {user.firstName || "user"}.</p>
      </main>
    </div>
  );
}

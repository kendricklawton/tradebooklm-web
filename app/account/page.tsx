import Header from "@/components/Header";
import { withAuth } from "@workos-inc/authkit-nextjs";

export default async function AccountPage() {
  const { user } = await withAuth();

  // Although the middleware should handle this, it's good practice for sensitive pages.
  if (!user) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold">Access Denied</h1>
          <p className="mt-4">You must be signed in to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Account Information</h1>
        <div className="mt-8 max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-500">
                First Name
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {user.firstName || "Not provided"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Last Name
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {user.lastName || "Not provided"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Email Address
              </label>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

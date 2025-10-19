// app/api/auth/[...workos]/route.ts

import { handleAuth } from "@workos-inc/authkit-nextjs";

export const GET = handleAuth();

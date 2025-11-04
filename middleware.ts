import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({
  middlewareAuth: {
    enabled: false,
    unauthenticatedPaths: ["/"],
  },
});

export const config = { matcher: ["/"] };

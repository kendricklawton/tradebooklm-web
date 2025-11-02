import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({
  middlewareAuth: {
    enabled: false,
    unauthenticatedPaths: ["/", "/test"],
  },
});

export const config = { matcher: ["/", "/test"] };

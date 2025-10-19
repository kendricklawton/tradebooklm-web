"use client";

import React from "react";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";

interface ProviderWrapperProps {
  children: React.ReactNode;
}

export const ProviderWrapper: React.FC<ProviderWrapperProps> = ({
  children,
}) => {
  return <AuthKitProvider>{children}</AuthKitProvider>;
};

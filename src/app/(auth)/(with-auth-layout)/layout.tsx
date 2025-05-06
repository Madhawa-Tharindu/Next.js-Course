// src/app/(auth)/(with-auth-layout)/layout.tsx

import AuthNavbar from "@/components/AuthNavBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthNavbar />
      {children}
      <h2>Inner Layout</h2>
    </>
  );
}

"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react"; 
interface Prototype {
  children: ReactNode;
}

const AuthProvider = ({ children }: Prototype) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;

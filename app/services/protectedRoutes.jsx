"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth || !auth.emailAddress) {
      router.push("/Auth/login");
    }
  }, [auth, router]);

  if (!auth || !auth.emailAddress) {
    return null;
  }

  return children;
};

export default ProtectedRoute;

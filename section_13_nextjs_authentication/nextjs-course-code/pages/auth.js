import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import AuthForm from "../components/auth/auth-form";

function AuthPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const session = await getSession();
    if (session) {
      router.replace("/");
    } else {
      setLoading(false);
    }
  });
  if (loading) {
    return <p>Loading page...</p>;
  }
  return <AuthForm />;
}

export default AuthPage;

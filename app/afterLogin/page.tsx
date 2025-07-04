"use client";

import Splash from "@/components/_app/splash";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AfterLoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    const redirectBasedOnRole = () => {
      if (!session?.user) {
        router.push("/");
        return;
      }

      const user = session.user;

      setTimeout(() => {
        if (user?.roles) {
          // Add here the hierarchy of redirect based on roles
          if (user.roles.includes("ADMIN")) {
            router.push("/admin");
            return;
          }

          router.push("/user");
          return;
        }
        router.push("/");
      }, 500);
    };

    if (status === "authenticated") {
      redirectBasedOnRole();
    }

    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [session, status, router]);

  return <Splash />;
};

export default AfterLoginPage;

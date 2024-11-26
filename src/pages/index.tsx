import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {    
    if (user && user.sessionToken && Date.now() < Number(user.sessionExpiry)) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, []);
  // remove index page our base route is login or dashboard

  return (
    <div></div>
  );
}
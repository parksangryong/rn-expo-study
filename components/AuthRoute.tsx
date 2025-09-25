import useAuth from "@/hooks/queries/useAuth";
import { router, useFocusEffect } from "expo-router";

interface AuthRouteProps {
  children: React.ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const { auth } = useAuth();

  useFocusEffect(() => {
    !auth.id && router.replace("/auth");
  });

  return <>{children}</>;
}

export default AuthRoute;

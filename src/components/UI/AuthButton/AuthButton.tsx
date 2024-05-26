import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };
  return (
    <>
      {userInfo?.userId ? (
        <>
          <Link href="/dashboard">
            <Button color="primary">Dashboard</Button>
          </Link>
          <Button onClick={handleLogOut} color="error">
            logout
          </Button>
        </>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;

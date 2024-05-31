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
            <Button
              sx={{ borderRadius: "20px", py: "6px", px: "12px" }}
              color="primary"
            >
              Dashboard
            </Button>
          </Link>
          <Button
            sx={{ borderRadius: "20px", py: "6px", px: "12px" }}
            onClick={handleLogOut}
            color="error"
          >
            logout
          </Button>
        </>
      ) : (
        <Button
          sx={{ borderRadius: "20px", py: "6px", px: "12px" }}
          component={Link}
          href="/login"
        >
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;

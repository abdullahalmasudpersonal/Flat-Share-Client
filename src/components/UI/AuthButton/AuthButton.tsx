import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Button, MenuItem, Typography } from "@mui/material";
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
          <MenuItem sx={{ py: "6px", px: "12px", borderRadius: "20px" }}>
            <Link href="/dashboard">
              <Typography variant="body2" color="primary">
                Dashboard
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleLogOut}
            sx={{ py: "6px", px: "12px", borderRadius: "20px" }}
          >
            <Typography variant="body2" color="error">
              Logout
            </Typography>
          </MenuItem>
        </>
      ) : (
        <MenuItem
          onClick={handleLogOut}
          sx={{ py: "6px", px: "12px", borderRadius: "20px" }}
        >
          <Link href="/login">
            <Typography variant="body2" color="primary">
              Login
            </Typography>
          </Link>
        </MenuItem>
      )}
    </>
  );
};

export default AuthButton;

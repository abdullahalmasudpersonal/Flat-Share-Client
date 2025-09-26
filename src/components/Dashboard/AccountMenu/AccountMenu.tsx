import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.services";
import LockResetIcon from "@mui/icons-material/LockReset";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const menuStyles = {
  paper: {
    elevation: 0,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { role } = getUserInfo();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("accessToken");
    router.push("/login");
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} sx={{ border: '1px solid gray', color: "#fff", "&:hover": { backgroundColor: "rgba(255,255,255,0.1)", cursor: 'pointer' } }} >
            <KeyboardArrowDownIcon />
          </IconButton>
        </Tooltip>
      </Box >
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          ...menuStyles,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box>

        </Box>
        <MenuItem onClick={() => router.push(`/dashboard/${role}/profile`)}>
          <ListItemIcon>
             <AccountCircleIcon sx={{ color: "primary.main" }} />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={() => router.push(`/dashboard/change-password`)}>
          <ListItemIcon sx={{ color: "primary.main" }}>
              <LockResetIcon />
          </ListItemIcon>
          Change Password
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "error.main" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment >
  );
}

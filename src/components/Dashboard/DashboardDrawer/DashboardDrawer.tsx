"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Stack } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import SideBer from "../SideBer/SideBer";
import AccountMenu from "../AccountMenu/AccountMenu";

const drawerWidth = 240;

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { data, isLoading } = useGetSingleUserQuery({});

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            background: "#D7A1F9",
            boxShadow: 0,
            borderBottom: "1px solid lightgray",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "primary.main" }}
            >
              <MenuIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  color="gray"
                  noWrap
                  component="div"
                  sx={{ color: "rgba(11, 17, 52, 0.6)" }}
                >
                  Hi, {isLoading ? "Loading..." : data?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.main"
                  noWrap
                  component="div"
                >
                  Welcome to Flat Share
                </Typography>
              </Box>
              <Stack direction="row" gap={3}>
                <Badge badgeContent={1} color="primary">
                  <IconButton sx={{ background: "#ffffff" }}>
                    <NotificationsNoneIcon color="action" />
                  </IconButton>
                </Badge>
                <Avatar alt={data?.name} src={data?.profilePhoto} />
                <AccountMenu />
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            //    container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <SideBer />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <SideBer />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default DashboardDrawer;

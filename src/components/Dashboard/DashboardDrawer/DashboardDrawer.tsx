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
import { Avatar, Stack } from "@mui/material";
import SideBer from "../SideBer/SideBer";
import AccountMenu from "../AccountMenu/AccountMenu";
import { useGetMYProfileQuery } from "../../../redux/api/myProfile";

const drawerWidth = 260;

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { data, isLoading } = useGetMYProfileQuery({});

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
    <Box sx={{ display: "flex", fontFamily: 'serif' }}>
      <CssBaseline />
      <AppBar className="dashboardnavberbgcolor"
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ minHeight:'64px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
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
                noWrap
                component="div"
                sx={{ color: "White", fontWeight: 'bold', fontFamily: 'Monospace' }}
              >
                Hi, {isLoading ? "Loading..." : data?.name}
              </Typography>
              <Typography
                variant="body2"
                color="white"
                noWrap
                component="div"
              >
                Welcome to Flat Share
              </Typography>
            </Box>
            <Stack direction="row" gap={3}>
              <Avatar alt={data?.name} src={data?.profilePhoto} />
              <AccountMenu />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth, background: " rgb(18, 7, 49) 100% ", color: 'white', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
            },
          }}
        >
          <SideBer />
        </Drawer>
        <Drawer className="sideberbgcolor"
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth, background: "rgb(13, 1, 26)", color: 'white'
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
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{minHeight:'64px'}}  />
        <Box className='dashboardbgcolor'>{children}</Box>
      </Box>
    </Box>
  );
};

export default DashboardDrawer;

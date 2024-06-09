import { Box, List, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import assets from "../../../assets/logo/flatShareLogo.png";
import SideBerItem from "./SideBerItem";
import { useEffect, useState } from "react";
import { drawerItems } from "../../../utils/drawerItems";
import { UserRole } from "../../../types";
import { getUserInfo } from "../../../services/auth.services";

const SideBer = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
    const user = getUserInfo();
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image width={170} height={40} src={assets} alt="logo" />
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SideBerItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBer;

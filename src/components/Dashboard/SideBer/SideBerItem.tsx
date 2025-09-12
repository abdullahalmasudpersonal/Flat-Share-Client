import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DrawerItem } from "../../../types";

type IProps = {
  item: DrawerItem;
};

const SideBerItem = ({ item }: IProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderRight: "3px solid purple",
                "& svg": { color: "rgb(230, 186, 255)" }, color:'rgb(230, 186, 255)'
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon sx={{color:'white'}} />}</ListItemIcon>
          <ListItemText primary={item.title}  />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBerItem;

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SignpostIcon from "@mui/icons-material/Signpost";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { DrawerItem, UserRole } from "../types";
import { USER_ROLE } from "../contents/role";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleManues: DrawerItem[] = [];

  const defaultManues = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleManues.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleManues.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "All Seller",
          path: `${role}/all-seller`,
          icon: ManageAccountsIcon,
        },
        {
          title: "All Buyer",
          path: `${role}/all-buyer`,
          icon: ManageAccountsIcon,
        },
        {
          title: "Flat Management",
          path: `${role}/flat-management`,
          icon: ManageHistoryIcon,
        },
        /* {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        } */
      );
      break;

    case USER_ROLE.BUYER:
      roleManues.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "My Requests",
          path: `${role}/my-requests`,
          icon: RequestPageIcon,
        },
      );
      break;

    case USER_ROLE.SELLER:
      roleManues.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Post Ad",
          path: `${role}/post-ad`,
          icon: PostAddIcon,
        },
        {
          title: "My Ad",
          path: `${role}/my-ad`,
          icon: SignpostIcon,
        },
        {
          title: "My Requests",
          path: `${role}/my-requests`,
          icon: RequestPageIcon,
        },
      );
      break;

    default:
      break;
  }

  return [...roleManues, ...defaultManues];
};

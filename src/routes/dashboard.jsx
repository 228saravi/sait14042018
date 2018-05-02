import DashboardPage from "views/Dashboard/Dashboard.jsx";
import HistoryPage from "views/History/History.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import AboutPage from "views/About/About.jsx";
import {
  Dashboard,
  Person,
  History,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  Info
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Главная страница",
    navbarName: "Главная страница",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/history",
    sidebarName: "История",
    navbarName: "История",
    icon: History,
    component: HistoryPage
  },
  {
    tougleList: true,
    sidebarName: "Подразделения",
    routesTougle : [
      {
        path: "/typography",
        sidebarName: "Typography",
        navbarName: "Typography",
        icon: LibraryBooks,
        component: Typography
      },
      {
        path: "/icons",
        sidebarName: "Icons",
        navbarName: "Icons",
        icon: BubbleChart,
        component: Icons
      }
    ]
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList,
  },
  /* {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  }, */
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/about",
    sidebarName: "О нас",
    navbarName: "О нас.",
    icon: Info,
    component: AboutPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;

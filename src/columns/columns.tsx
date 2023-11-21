import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";

export const pagestext = [
  { id: "0", closeimag: <ArrowForwardIosIcon /> },
  {
    id: "1",

    name: "Dashboard",
    link: "dashboard",
    img: <DashboardIcon />,
  },
  { key: "Orders", name: "Orders", link: "orders", img: <ShoppingCartIcon /> },
  {
    id: "2",

    name: "Costumers",
    link: "costumers",
    img: <PeopleIcon />,
  },
  {
    id: "3",

    name: "Report",
    link: "report",
    img: <AssessmentIcon />,
  },
  {
    id: "4",

    name: "Product",
    link: "product",
    img: <LayersIcon />,
  },
  { id: "5", key: "Savedreports", names: "Saved reports" },
  {
    id: "6",
    name: "Corrent month",
    link: "correntMonth",
    img: <AssignmentIcon />,
  },
  {
    id: "7",
    name: "Last quarter",
    link: "LastQuarter",
    img: <AssignmentIcon />,
  },
  {
    id: "8",
    name: "Year-end sale",
    link: "YearEndSale",
    img: <AssignmentIcon />,
  },
];

export const pagesname = [
  "Dashboard",
  "Orders",
  "Costumers",
  "Report",
  "Report",
  "Product",
  "Corrent month",
  "Last quarter",
  "Year-end sale",
];

export const colors: any = [
  "black",
  "red",
  "yellow",
  "blue",
  "green",
  "gray",
  "pink",
  "purple",
];

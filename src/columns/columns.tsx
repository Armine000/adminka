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

export const dataList:any = [
  {
    id: 1,
    name: 'Product',
    link: 'product',
    inner: {val: true},
    incDec: {inc: 1, dec: null}
  },
  {
    id: 2,
    name: 'Search',
    link: 'search',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 3,
    name: 'Export',
    link: 'export',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 4,
    name: 'Import',
    link: 'import',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 5,
    name: 'Corporate',
    link: 'corporate',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 6,
    name: 'Accounts',
    link: 'accounts',
    inner: {val: true},
    incDec: {inc: 1, dec: null}
  },
  {
    id: 7,
    name: 'Cards',
    link: 'cards',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 8,
    name: 'Loans',
    link: 'loans',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 9,
    name: 'Transmissions',
    link: 'transmissions',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 10,
    name: 'Deposits',
    link: 'deposits',
    inner: {val: true},
    incDec: {inc: 1, dec: null}
  },
  {
    id: 11,
    name: 'Investments',
    link: 'investments',
    incDec: {inc: 1, dec: 2}
  },
  {
    id: 12,
    name: 'Others',
    link: 'others',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 13,
    name: 'Orders',
    link: 'orders',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 14,
    name: 'title',
    link: 'title',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 15,
    name: 'Phone',
    link: 'phone',
    incDec: {inc: 1, dec: 1}
  },
  {
    id: 16,
    name: 'Start',
    link: 'start',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 17,
    name: 'Chat',
    link: 'chat',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 18,
    name: 'Every',
    link: 'every',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 19,
    name: 'Link',
    link: 'link',
    incDec: {inc: 1, dec: null}
  },
  {
    id: 20,
    name: 'Castumers',
    link: 'castumers',
    incDec: {inc: 1, dec: 2}
  }
];

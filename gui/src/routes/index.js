import Main from "../Main";
import Reg from "../newcomponents/RegisterEmployee/reg";
import Log from "../newcomponents/Login/log";
import ShopReg from "../newcomponents/RegisterShop/shopreg";
import ProReg from "../newcomponents/RegisterProduct/productreg";
import EmpRegLog from "../newcomponents/Registerlogin/log";
import Rider from "../newcomponents/Rider/rider";


const indexRoutes = [
  { pathname: "/", name: "Main", component: <Main /> },
  { pathname: "/regemp", name: "regemp", component: <Reg /> },
  { pathname: "/log", name: "log", component: <Log /> },
  { pathname: "/shopreg", name: "shopreg", component: <ShopReg /> },
  { pathname: "/productreg", name: "productreg", component: <ProReg /> },
  { pathname: "/empreglog", name: "empreglog", component: <EmpRegLog /> },
  { pathname: "/rider", name: "rider", component: <Rider /> }
];

export default indexRoutes;
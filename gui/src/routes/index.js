import Main from "../Main";
import Reg from "../newcomponents/RegisterEmployee/reg";
import Log from "../newcomponents/Login/log";
import ShopReg from "../newcomponents/RegisterShop/shopreg";
import ProReg from "../newcomponents/RegisterProduct/productreg";
import EmpRegLog from "../newcomponents/Registerlogin/log";
import Rider from "../newcomponents/Rider/rider";
import Cart from "../components/Cart/cartmain";
import Cartlog from "../components/cartlogin/log";
import Cartreg from "../components/cartregistr/reg";
import RiderCart from "../newcomponents/Cart/cartmain";

const indexRoutes = [
  { pathname: "/", name: "Main", component: <Main /> },
  { pathname: "/regemp", name: "regemp", component: <Reg /> },
  { pathname: "/log", name: "log", component: <Log /> },
  { pathname: "/shopreg", name: "shopreg", component: <ShopReg /> },
  { pathname: "/productreg", name: "productreg", component: <ProReg /> },
  { pathname: "/empreglog", name: "empreglog", component: <EmpRegLog /> },
  { pathname: "/rider", name: "rider", component: <Rider /> },
  { pathname: "/cart", name: "cart", component: <Cart /> },
  { pathname: "/ridercart", name: "cart", component: <RiderCart /> },
  { pathname: "/cartlog", name: "cartlog", component: <Cartlog /> },
  { pathname: "/cartreg", name: "cartreg", component: <Cartreg /> }
  
  
];

export default indexRoutes;
import Home from "../pages/Home";
import AlertList from "../pages/Alert List";


interface  IRouter {
  publicRoutes: any[];
}


const publicRoutes= [
  { path: "/", component: Home },
  { path: "/alert", component: AlertList },
];

export { publicRoutes };

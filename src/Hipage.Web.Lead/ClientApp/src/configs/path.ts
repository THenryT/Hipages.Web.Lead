import { HomeOutlined } from "@ant-design/icons";
import Home from "../pages/home";

export interface Path {
  path: string;
  name: string;
  icon: React.ForwardRefExoticComponent<any>;
  component: any;
}

const paths: Path[] = [
  {
    path: "/home",
    name: "Home",
    icon: HomeOutlined,
    component: Home,
  },
];
export default paths;

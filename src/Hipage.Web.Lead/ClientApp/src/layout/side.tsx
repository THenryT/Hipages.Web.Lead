import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Paths, { Path } from "../configs/path";

interface IProps {
  collapsed: boolean;
}

const SideLayout = (props: IProps) => {
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <Layout.Sider collapsible collapsed={props.collapsed} trigger={null}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[menuIndex.toString()]}
      >
        {Paths.map((item: Path, index: number) => (
          <Menu.Item key={index} onClick={() => setMenuIndex(index)}>
            <item.icon />
            <span>{item.name}</span>
            <Link to={item.path}></Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default React.memo(SideLayout);

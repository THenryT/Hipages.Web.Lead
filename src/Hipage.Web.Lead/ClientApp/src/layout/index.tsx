import React, { useState } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import SideLayout from "./side";

export default (props: { children?: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [height] = useState(window.innerHeight);
  return (
    <Layout style={{ minHeight: height }}>
      <SideLayout collapsed={collapsed} />
      <Layout className="site-layout">
        <Layout.Header
          className="site-layout-background"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Layout.Header>
        <Layout.Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

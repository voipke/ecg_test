import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import React, { useState } from 'react';
import { MailOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import type { MenuProps, MenuTheme } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key?: React.Key | null,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem(<Link to={`contacts/add`}>Your Name</Link>, '1', <AppstoreOutlined />),
	getItem(<Link to={`contacts/edit`}>Your Name</Link>, '2', <SettingOutlined />),
];


export default function Root() {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
					<div className="demo-logo-vertical" />
					ecg_test
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['1']}
						mode="vertical"
						theme="dark"
						items={items}
					/>
				</Sider>
				<Layout>
					<Header style={{ padding: 0, background: colorBgContainer }} />
					<Content style={{ margin: '0 16px' }}>
						<Outlet />
					</Content>
					<Footer style={{ textAlign: 'center' }}>ecg_test ©2023 Created by voipke</Footer>
				</Layout>
			</Layout>
		</>
	);
}

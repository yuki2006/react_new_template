import {Layout} from "antd";
import { Outlet } from 'react-router';
import {FC} from "react";

const Header: FC =()=> {
        return <Layout>
            <Layout.Sider>
                <header className="bg-white shadow-sm">
                    へっだー
                </header>
            </Layout.Sider>
            <Layout.Content>
                <Outlet/>
            </Layout.Content>
        </Layout>

}

export default Header;
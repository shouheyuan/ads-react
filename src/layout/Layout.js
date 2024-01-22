import { Layout, Flex, Menu } from 'antd';
import { Outlet } from 'react-router-dom'
import { FundOutlined, AppstoreOutlined, BorderOuterOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout;

const items = [
    {
        key: '/Home',
        icon: <FundOutlined />,
        label: '首页',
    },
    {
        key: '/Promotion',
        icon: <AppstoreOutlined />,
        label: '投放管理',
    },
    {
        key: '/CreateAd',
        icon: <BorderOuterOutlined />,
        label: '创编',
    }
];

let navigate = null

const handleMenuClick = ({ item, key, keyPath, domEvent }) => {
    navigate(key)
}

function BasicLayout() {

    navigate = useNavigate()


    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%' }}
                        items={items}
                        onClick={handleMenuClick}
                    />
                </Sider>
                <Content>
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    )

}
export default BasicLayout;
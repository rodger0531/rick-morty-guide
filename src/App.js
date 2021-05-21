import "./App.css";
import CharacterPage from "./characters";
import { Layout, Menu } from "antd";
import rickAndMortyLogo from "./logo.png";

const { Content, Sider } = Layout;
function App() {
  return (
    <Layout className="min-h-screen">
      <Sider
        width="300px"
        className="flex justify-center"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <img src={rickAndMortyLogo} alt="Logo" className="h-20 m-4" />
        <Menu
          className="text-xl"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className="App">
          <CharacterPage />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

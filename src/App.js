import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterPage from "./characters";
import { Layout, Menu } from "antd";
import rickAndMortyLogo from "./logo.png";

const { Content, Sider } = Layout;
function App() {
  return (
    <Router>
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
            className="text-xl mt-10"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" className="my-5">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" className="my-5">
              <Link to="/characters">Characters</Link>
            </Menu.Item>
            <Menu.Item key="3" className="my-5">
              <Link to="/episodes">Episodes</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className="App">
            <Switch>
              <Route exact path="/"></Route>
              <Route exact path="/characters">
                <CharacterPage />
              </Route>
              <Route exact path="/episodes"></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;

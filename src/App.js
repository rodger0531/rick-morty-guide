import "./App.css";
import {
  Switch,
  Route,
  NavLink,
  withRouter,
  useRouteMatch,
} from "react-router-dom";
import CharacterPage from "./characters";
import { Layout, Menu } from "antd";
import rickAndMortyLogo from "./logo.png";
import { Home } from "./home";
import EpisodePage from "./episodes";

const paths = ["/", "/characters", "/episodes"];

const { Content, Sider } = Layout;
function App({ location }) {
  return (
    <Layout className="min-h-screen">
      <Sider
        width="300px"
        className="flex justify-center"
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <img src={rickAndMortyLogo} alt="Logo" className="h-20 m-4" />
        <Menu
          className="text-xl mt-10"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[`${paths.indexOf(location.pathname) + 1}`]}
        >
          <Menu.Item key="1" className="my-5">
            <NavLink to={paths[0]}>Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2" className="my-5">
            <NavLink to={paths[1]}>Characters</NavLink>
          </Menu.Item>
          <Menu.Item key="3" className="my-5">
            <NavLink to={paths[2]}>Episodes</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className="App">
          <Switch>
            <Route exact path={paths[0]}>
              <Home />
            </Route>
            <Route exact path={paths[1]}>
              <CharacterPage />
            </Route>
            <Route exact path={paths[2]}>
              <EpisodePage />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default withRouter(App);

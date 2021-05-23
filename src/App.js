import "./App.css";
import { Switch, Route, NavLink, withRouter, Redirect } from "react-router-dom";
import CharacterPage from "./characters";
import { Layout, Menu } from "antd";
import rickAndMortyLogo from "./assets/logo.png";
import { Home } from "./home";
import EpisodePage from "./episodes";

const paths = ["/", "/characters", "/episodes"];

const { Content, Sider } = Layout;
function App({ location }) {
  return (
    <Layout className="min-h-screen">
      <Sider
        width="300px"
        className="flex justify-center z-10 mobile:absolute mobile:h-screen "
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="flex flex-col justify-between h-full">
          <div>
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
          </div>
          <p className="flex justify-center mb-5">
            API from &nbsp;
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://rickandmortyapi.com/graphql"
            >
              Rick and Morty GraphQL
            </a>
          </p>
        </div>
      </Sider>
      <Layout>
        <Content className="App">
          <Switch>
            <Route exact path={paths[0]} component={Home} />
            <Route path={paths[1]} component={CharacterPage} />
            <Route path={paths[2]} component={EpisodePage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default withRouter(App);

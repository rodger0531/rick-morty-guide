import "./App.css";
import CharacterList from "./characters/character-list";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Header>test</Header>
      <Content>
        <CharacterList />
      </Content>
    </div>
  );
}

export default App;

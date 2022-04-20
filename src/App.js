import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import TextSkill from "./components/Skill/TextSkill";
import Content from "./components/Content/Content.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Skill />
      {/* <TextSkill /> */}
      <Content />
    </div>
  );
}

export default App;

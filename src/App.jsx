import Shader from "./components/Shader";
import SideMenu from "./components/SideMenu";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <SideMenu />
      <MusicPlayer />
      <Shader />
    </div>
  );
}

export default App;

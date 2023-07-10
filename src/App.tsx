import About from "./components/About";
import Container from "./components/Container";
import img_i from "./assets/img_my.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-4 my-4 md:container md:mx-auto md:my-auto p-4">
        <div className="flex space-x-2">
          <div className="rounder">
            <img src={img_i} className="w-96 rounded-3xl animate-fadeIn" />
          </div>
          <div className="container mx-4 my-4 md:container md:mx-auto md:my-auto p-4 animate-fadeIn">
            <Container border>
              <About />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import About from "./components/About";
import Container from "./components/Container";
import img_i from "./assets/img_my.jpg";

function App() {
  return (
    <div className="container mx-4 my-4 md:container md:mx-auto md:my-auto p-4">
      <div className="flex space-x-2">
        <div className="rounder">
          <Container>
            <img src={img_i} className="w-96" />
          </Container>
        </div>
        <Container border>
          <About />
        </Container>
      </div>
    </div>
  );
}

export default App;

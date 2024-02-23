import About from "./components/About";
import Container from "./components/Container";
import img_i from "./assets/img_my.png";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Contact from "./components/Contact";
import { useState } from "react";
import Repositories from "./components/Repositories";
import InfoComponent from "./components/InfoComponent";

function App() {
  const [translate, setTranslate] = useState(false);
  const [isBlinkingAbout, setIsBlinkingAbout] = useState(false);
  const [isBlinkingContact, setIsBlinkingContact] = useState(false);
  const [isBlinkingonRepositories, setIsBlinkingRepositories] = useState(false);

  const handleToggleBlink = (section: string) => {
    if (section === "about") setIsBlinkingAbout(true);
    if (section === "contact") setIsBlinkingContact(true);
    if (section === "repositories") setIsBlinkingRepositories(true);

    setTimeout(() => {
      if (section === "about") setIsBlinkingAbout(false);
      if (section === "contact") setIsBlinkingContact(false);
      if (section === "repositories") setIsBlinkingRepositories(false);
    }, 200);
  };

  return (
    <>
      <Navbar
        translate={translate}
        onAboutClick={() => handleToggleBlink("about")}
        onContactClick={() => handleToggleBlink("contact")}
        onContactRepositories={() => handleToggleBlink("repositories")}
      />
      <div className="container mx-4 my-4 md:container md:mx-auto md:my-auto p-4 animate-fadeIn">
        <div className="flex space-x-2">
          <div className="rounder">
            <img
              src={img_i}
              className="mx-auto w-72 rounded-xl shadow-lg mb-4"
            />
            <Container border>
              <InfoComponent
                infos={{ Name: "Nicolas", LastName: "Elias" }}
                office={{
                  Occupation: "Dev. FullStack jr",
                  Enterprise: "@laboratoriobridge",
                }}
                translate={translate}
              />
            </Container>
            <Container>
              <MusicPlayer translate={translate} />
            </Container>
          </div>
          <div className="container mx-4 my-4 md:container md:mx-auto md:my-auto p-4">
            <Container border isBlinking={isBlinkingAbout}>
              <About translate={translate} setTranslate={setTranslate} />
            </Container>
          </div>
        </div>
      </div>
      <div className="container mx-4 my-4 md:container md:mx-auto md:my-auto p-4 animate-fadeIn flex gap-4">
        <Container
          border
          className="flex items-center justify-center flex-1 "
          isBlinking={isBlinkingContact}
        >
          <Contact translate={translate} />
        </Container>
        <Container
          border
          className="flex-1 ml-8"
          isBlinking={isBlinkingonRepositories}
        >
          <Repositories translate={translate} />
        </Container>
      </div>
    </>
  );
}

export default App;

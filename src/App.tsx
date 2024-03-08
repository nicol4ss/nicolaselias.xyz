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
        onRepositoriesClick={() => handleToggleBlink("repositories")}
      />
      <div className="container mx-2 mt-2 mb-0 sm:mx-4 sm:mt-4 sm:mb-0 md:mx-auto md:mt-0 md:mb-0 p-2 sm:p-4 animate-fadeIn">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="rounded">
            <img
              src={img_i}
              className="mx-auto w-48 sm:w-72 rounded-xl shadow-lg mb-4"
              alt="Profile"
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
          <div className="flex-grow">
            <Container border isBlinking={isBlinkingAbout}>
              <About translate={translate} setTranslate={setTranslate} />
            </Container>
          </div>
        </div>
      </div>
      <div className="container mx-2 mt-2 mb-0 sm:mx-4 sm:mt-4 sm:mb-0 md:mx-auto md:mt-0 md:mb-0 p-2 sm:p-4 animate-fadeIn flex flex-col sm:flex-row gap-4">
        <Container
          border
          className="flex items-center justify-center flex-grow"
          isBlinking={isBlinkingContact}
        >
          <Contact translate={translate} />
        </Container>
        <Container
          border
          className="flex-grow"
          isBlinking={isBlinkingonRepositories}
        >
          <Repositories translate={translate} />
        </Container>
      </div>
    </>
  );
}

export default App;

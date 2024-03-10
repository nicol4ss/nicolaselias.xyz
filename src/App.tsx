import { useState } from "react";
import About from "./components/About";
import Container from "./components/Container";
import img_i from "./assets/img_my.png";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Contact from "./components/Contact";
import Repositories from "./components/Repositories";
import InfoComponent from "./components/InfoComponent";
import Skills from "./components/Skills";

function App() {
  const [translate, setTranslate] = useState(false);
  const [isBlinkingAbout, setIsBlinkingAbout] = useState(false);
  const [isBlinkingContact, setIsBlinkingContact] = useState(false);
  const [isBlinkingRepositories, setIsBlinkingRepositories] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App overflow-x-hidden safe:pt-4 safe:pb-4 safe:pl-4 safe:pr-4">
      <Navbar
        translate={translate}
        onAboutClick={() => handleToggleBlink("about")}
        onContactClick={() => handleToggleBlink("contact")}
        onRepositoriesClick={() => handleToggleBlink("repositories")}
        scrollToSection={scrollToSection}
      />
      <div className="animate-fadeIn">
        <div className="container mx-auto p-4 sm:pl-8 sm:pr-4 md:p-4">
          <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
            <div className="w-full md:w-1/3 mb-4">
              <img
                src={img_i}
                className="rounded-full shadow-lg mb-4 w-48 mx-auto md:w-72"
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
            <div className="w-full md:flex-1 space-y-4">
              <div id="about">
                <Container border isBlinking={isBlinkingAbout}>
                  <About translate={translate} setTranslate={setTranslate} />
                </Container>
                <Container border isBlinking={isBlinkingAbout}>
                  <Skills />
                </Container>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div id="repositories">
                  <Container border isBlinking={isBlinkingRepositories}>
                    <Repositories translate={translate} />
                  </Container>
                </div>
                <div id="contact">
                  <Container border isBlinking={isBlinkingContact}>
                    <Contact translate={translate} />
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

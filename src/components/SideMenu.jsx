import { useState } from "react";
import { FaUserCircle, FaCode, FaEnvelope } from "react-icons/fa"; // Ícones
import { IoMdClose, IoMdMenu } from "react-icons/io"; // Ícones do menu
import AboutModal from "./modal/AboutModal";
import ContactModal from "./modal/ContactModal";
import "./SideMenu.css";

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openAboutModal = () => {
    setAboutModalOpen(true);
    setIsMenuOpen(false);
  };

  const openContactModal = () => {
    setContactModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeModals = () => {
    setAboutModalOpen(false);
    setContactModalOpen(false);
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span
          className={`menu-icon ${isMenuOpen ? "menu-open" : "menu-close"}`}
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </span>
      </button>

      <div className={`side-menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={openAboutModal}>
            <FaUserCircle />
            About
          </li>
          <li onClick={openContactModal}>
            <FaEnvelope />
            Contact
          </li>
          <li
            onClick={() =>
              window.open(
                "https://github.com/nicolaseliasx?tab=repositories",
                "_blank"
              )
            }
          >
            <FaCode />
            Repositories
          </li>
        </ul>
      </div>

      <AboutModal isOpen={aboutModalOpen} closeModal={closeModals} />
      <ContactModal isOpen={contactModalOpen} closeModal={closeModals} />
    </>
  );
};

export default SideMenu;

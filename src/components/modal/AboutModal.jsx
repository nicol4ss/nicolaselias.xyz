import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import profileImage from "../../assets/profile.jpeg";
import OpenPDFLink from "../OpenPDFLink";
import resumePdf from "../../assets/resume-nicolas-en.pdf";
import "./AboutModal.css";

const AboutModal = ({ isOpen, closeModal }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <button className="modal-close" onClick={handleClose}>
            <IoMdClose size={24} />
          </button>
        </div>
        <h2>About</h2>
        <div className="modal-layout">
          <div className="modal-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="modal-body">
            <p>
              Hi! My name is Nicolas Elias, and I am a Software Developer based
              in Florianópolis, Brazil. I have over 3 years of experience in the
              software development field, specializing in creating robust and
              scalable full-stack solutions.
            </p>
            <hr />
            <p>
              I graduated from the Federal University of Santa Catarina (UFSC),
              one of Brazil's top universities, where I honed my skills in
              computer science and developed a deep passion for technology and
              problem-solving.
            </p>
            <hr />
            <p>
              Throughout my career, I have had the privilege to work on
              impactful projects, applying technologies like Java, Kotlin,
              Spring Boot, React, Docker, and GraphQL.
            </p>
            <hr />
            <p>
              I've always been passionate about technology, and programming has
              been my way of making an impact. I love exploring cutting-edge
              solutions, creating meaningful experiences, and learning something
              new every day. If you're curious about my work, check my{" "}
              <OpenPDFLink pdfUrl={resumePdf} linkText="resume" />.
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="https://www.linkedin.com/in/nicolas-elias-7357b6218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nicolaseliasx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:your-email@example.com">
            <MdEmail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;

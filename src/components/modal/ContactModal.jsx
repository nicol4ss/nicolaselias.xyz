import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import "./ContactModal.css";

const ContactModal = ({ isOpen, closeModal }) => {
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
        className={`modal-content contact-modal ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>
          <IoMdClose />
        </button>
        <h2>Contact</h2>
        <div className="modal-body">
          <div className="contact-text">
            <h3>Enjoying my Work?</h3>
            <p>
              You can connect with me via email or LinkedIn if you're interested
              in discussing work, projects, or just sharing ideas about
              technology!
            </p>
            <p>
              I'm always looking for new challenges and opportunities. Let's
              work on something amazing together!
            </p>
          </div>
          <div className="contact-links">
            <h3>Get in Touch!</h3>
            <ul>
              <li>
                <MdEmail /> <a href="mailto:nicolaselias@pm.me">Email</a>
              </li>
              <li>
                <FaLinkedin />{" "}
                <a
                  href="https://www.linkedin.com/in/nicolas-elias-7357b6218/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <FaGithub />{" "}
                <a
                  href="https://github.com/nicolaseliasx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

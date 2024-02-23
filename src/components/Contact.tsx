import { BsTelegram } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

interface ContactProps {
  translate: boolean;
}

function Contact({ translate }: ContactProps) {
  return (
    <div className="text-white text-lg font-bold items-center">
      {translate ? "CONTACT ME:" : "ENTRE EM CONTATO:"}
      <div className="flex items-center h-16 w-full">
        <a
          href="https://tttttt.me/nicol4ss"
          className="no-underline text-white mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-transparent border border-white text-white p-2 rounded">
            <BsTelegram className="inline mr-2" /> Telegram
          </button>
        </a>
        <a
          href="mailto:nicolaselias@pm.me?subject=Contato Nicolas"
          className="no-underline text-white mr-4"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-transparent border border-white text-white p-2 rounded">
            <AiOutlineMail className="inline mr-2" /> E-MAIL
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-elias-7357b6218/"
          className="no-underline text-white"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-transparent border border-white text-white p-2 rounded">
            <AiFillLinkedin className="inline mr-2" /> Linkedin
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;

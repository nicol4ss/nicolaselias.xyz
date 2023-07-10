import { useState } from "react";
import {
  DiGit,
  DiGithubBadge,
  DiJsBadge,
  DiLinux,
  DiPython,
} from "react-icons/di";
import {
  SiCypress,
  SiDocker,
  SiGraphql,
  SiJavascript,
  SiJunit5,
  SiReact,
  SiTypescript,
  SiKotlin,
  SiSpringboot,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

function About() {
  const [isInglish, setInglish] = useState(true);
  const descriptionPt = `Oi! Meu nome é Nicolas Elias, sou Bolsista de Desenvolvimento Full Stack no Laboratorio Bridge_ e estudante
  de Ciências da Computação na Universidade Federal de Santa Catarina em Florianópolis - SC. Tenho experiência de mais de um ano
  na área de desenvolvimento web e estou buscando me especializar em desenvolvimento full stack. Sou apaixonado por tecnologia e
  direcionei minha vida para viver disso. Desde o início da faculdade, descobri minha paixão pela programação e adoro criar
  experiências únicas por meio da tecnologia. Gosto de criar coisas legais que causam impacto na vida das
  pessoas e me sinto privilegiado por ter a chance de aprender algo
  novo todos os dias!`;

  const descriptionIn = `Hi! My name is Nicolas Elias, currently working as a Full Stack Development Intern at Laboratorio Bridge_ and pursuing my degree in Computer Science at the Federal University of Santa Catarina in Florianópolis - SC.
  I am relatively new to the field of web development, with just over a year of experience, but I am dedicated to specializing in full stack development. Technology has always been a fascination for me, and it has driven me to pursue a career in this field. My journey with programming began when I started college, and ever since, I have been passionate about creating unique experiences through technology.
  With all my heart, I am committed to making a difference through innovative and impactful technological solutions. I enjoy creating cool things that have an impact on people's lives, and I feel privileged to have the opportunity to learn something new every day!`;
  return (
    <div className="text-white">
      <div>
        <button
          className="bg-gray-600 hover:bg-gray-400 font-semibold py-2 px-4 border border-gray-800 rounded shadow text-white"
          onClick={() => setInglish(!isInglish)}
        >
          {isInglish ? "Traduzir" : "Translate"}
        </button>
        <h1 className="text-2xl">{!isInglish ? "Sobre:" : "About:"}</h1>
        <p className="text-lg">{isInglish ? descriptionIn : descriptionPt}</p>
      </div>
      <div className="my-4">
        <h1 className="text-2xl my-2">SKILLS & PROFICIENCY</h1>
        <h2 className="text-xl mb-2">Languages:</h2>
        <ul className="list-none flex ">
          <li>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-2xl">
                <SiJavascript />
              </span>
              <span className="text-blue-700 text-2xl">
                <SiTypescript />
              </span>
              <span>JavaScript (+TypeScript)</span>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-yellow-400 text-2xl">
                <DiPython />
              </span>
              Python
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-orange-600 text-2xl">
                <SiKotlin />
              </span>
              Kotlin
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-blue-400 text-2xl">
                <FaJava />
              </span>
              Java
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-pink-600 text-2xl">
                <GrGraphQl />
              </span>
              GraphQL
            </div>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-xl mb-2">Frameworks & Runtimes:</h2>
        <ul className="list-none flex">
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-blue-600 text-2xl">
                <SiReact />
              </span>
              React
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-green-600 text-2xl">
                <SiSpringboot />
              </span>
              SpringBoot
            </div>
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h2 className="text-xl mb-2">DevOps, CI/CD, and Testing:</h2>
        <ul className="list-none flex">
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-red-500 text-2xl">
                <DiGit />
              </span>{" "}
              Git &{" "}
              <span className="text-2xl">
                <DiGithubBadge />
              </span>{" "}
              Github
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-green-700 text-2xl">
                <SiJunit5 />
              </span>{" "}
              JUnit 5Test
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-green-500 text-2xl">
                <SiCypress />
              </span>{" "}
              Cypress
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-blue-500 text-2xl">
                <SiDocker />
              </span>{" "}
              Docker
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 mx-2">
              <span className="text-2xl">
                <DiLinux />
              </span>{" "}
              Linux
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;

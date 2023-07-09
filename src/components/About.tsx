import { useState } from "react";

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
        <h2 className="text-xl">Languages:</h2>
        <ul className="list-none">
          <li>JavaScript (+TypeScript)</li>
          <li>Python</li>
          <li>Kotlin</li>
          <li>Java</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

export default About;

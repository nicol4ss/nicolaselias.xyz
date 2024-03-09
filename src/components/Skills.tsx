import { DiGit, DiGithubBadge, DiLinux, DiPython } from "react-icons/di";
import {
  SiJest,
  SiDocker,
  SiJavascript,
  SiJunit5,
  SiReact,
  SiTypescript,
  SiKotlin,
  SiSpringboot,
  SiCplusplus,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { FaJava } from "react-icons/fa";

function Skills() {
  return (
    <div className="text-white">
      <div className="my-4">
        <h1 className="text-2xl my-2">SKILLS & PROFICIENCY</h1>
        <h2 className="text-xl mb-2">Languages:</h2>
        <div className="flex flex-wrap">
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-yellow-400 text-2xl">
              <SiJavascript />
            </span>
            <span className="text-blue-700 text-2xl">
              <SiTypescript />
            </span>
            <span>JavaScript (+TypeScript)</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-yellow-400 text-2xl">
              <DiPython />
            </span>
            <span>Python</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-orange-600 text-2xl">
              <SiKotlin />
            </span>
            <span>Kotlin</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-blue-400 text-2xl">
              <FaJava />
            </span>
            <span>Java</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-blue-400 text-2xl">
              <SiCplusplus />
            </span>
            <span>C++</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-pink-600 text-2xl">
              <GrGraphQl />
            </span>
            <span>GraphQL</span>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-xl mb-2">Frameworks & Runtimes:</h2>
        <div className="flex flex-wrap">
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-blue-600 text-2xl">
              <SiReact />
            </span>
            <span>React</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-green-600 text-2xl">
              <SiSpringboot />
            </span>
            <span>SpringBoot</span>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-xl mb-2">DevOps, CI/CD, and Testing:</h2>
        <div className="flex flex-wrap">
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-red-500 text-2xl">
              <DiGit />
            </span>
            <span>Git & </span>
            <span className="text-2xl">
              <DiGithubBadge />
            </span>
            <span>GitHub</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-green-700 text-2xl">
              <SiJunit5 />
            </span>
            <span>JUnit 5</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-green-500 text-2xl">
              <SiJest />
            </span>
            <span>Jest</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-blue-500 text-2xl">
              <SiDocker />
            </span>
            <span>Docker</span>
          </div>
          <div className="flex items-center gap-2 m-2 break-words">
            <span className="text-2xl">
              <DiLinux />
            </span>
            <span>Linux</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

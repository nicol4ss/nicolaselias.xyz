import { FaGithub } from "react-icons/fa";

interface RepositoriesProps {
  translate: boolean;
}

function Repositories({ translate }: RepositoriesProps) {
  return (
    <a
      href="https://github.com/nicolaseliasxyz"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 m-4 bg-gray-200 rounded-lg hover:bg-gray-300"
    >
      <FaGithub className="text-2xl" />
      <span className="ml-2 font-bold text-lg">
        {translate ? "Repositories" : "Repositórios"}
      </span>
    </a>
  );
}

export default Repositories;

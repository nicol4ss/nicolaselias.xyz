interface NavbarProps {
  translate: boolean;
  onAboutClick(): void;
  onContactClick(): void;
  onRepositoriesClick(): void;
  scrollToSection(sectionId: string): void;
}

function Navbar({
  translate,
  onAboutClick,
  onContactClick,
  onRepositoriesClick,
  scrollToSection,
}: NavbarProps) {
  return (
    <nav className="shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                onAboutClick();
                scrollToSection("about");
              }}
              className="text-gray-300 hover:text-white font-bold"
            >
              {translate ? "ABOUT" : "SOBRE"}
            </button>
            <button
              onClick={() => {
                onRepositoriesClick();
                scrollToSection("repositories");
              }}
              className="text-gray-300 hover:text-white font-bold"
            >
              {translate ? "REPOSITORIES" : "REPÓSITORIOS"}
            </button>
            <button
              onClick={() => {
                onContactClick();
                scrollToSection("contact");
              }}
              className="text-gray-300 hover:text-white font-bold"
            >
              {translate ? "CONTACT" : "CONTATO"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

type ComponentProps = {
  children: React.ReactNode;
  border?: boolean;
};

const Container: React.FC<ComponentProps> = ({ children, border }) => {
  const containerClasses = `container mx-4 my-4 md:container md:mx-auto md:my-auto p-4 w-full ${
    border ? "border-solid border-2 border-gray-700 rounded" : ""
  }`;
  return <div className={containerClasses}>{children}</div>;
};

export default Container;

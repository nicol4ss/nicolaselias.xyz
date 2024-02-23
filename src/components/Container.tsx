import React from "react";

type ComponentProps = {
  children: React.ReactNode;
  border?: boolean;
  className?: string;
  isBlinking?: boolean;
};

const Container: React.FC<ComponentProps> = ({
  children,
  border,
  className,
  isBlinking,
}) => {
  const containerClasses = `container mx-4 my-4 md:container md:mx-auto md:my-auto p-4 w-full ${
    border ? "border-solid border-2 border-gray-500 rounded-3xl" : ""
  } ${isBlinking ? "animate-blink" : ""} ${className || ""}`;

  return <div className={containerClasses}>{children}</div>;
};

export default Container;

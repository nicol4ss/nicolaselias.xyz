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
  const containerClasses = `container my-2 sm:mx-4 sm:my-4 p-2 sm:p-4 w-full ${
    border
      ? "border-solid border-2 border-gray-500 rounded-xl sm:rounded-3xl"
      : ""
  } ${isBlinking ? "animate-blink" : ""} ${className || ""} break-words`;

  return <div className={containerClasses}>{children}</div>;
};

export default Container;

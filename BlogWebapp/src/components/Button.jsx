import React, { Children } from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-black",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      //note: always write props outside classname cruly brackets
      {children}
    </button>
  );
}

export default Button;

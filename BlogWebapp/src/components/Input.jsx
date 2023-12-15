import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 ml-24" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`py-2 px-8 w-1/2 border-violet-400 border-2 ml-24 ${className} `}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;

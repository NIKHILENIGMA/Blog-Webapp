import React, { useId } from "react";

function Select({ options, label, className, ...props }, ref) {
  const id = useId;

  return (
    <div>
      {label && <label htmlFor={id} className=""></label>}
      <Select
        {...props}
        className={`px-4 py-2 rounded-md text-black outline-none`}
      >
        {options?.map((option) => (
          <options key={option} value={option}>
            {option}
          </options>
        ))}
      </Select>
    </div>
  );
}

export default React.forwardRef(Select);

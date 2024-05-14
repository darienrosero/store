import React from "react";

const FormField = ({ id, label, placeholder }) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        type={id === "password" ? "password" : "text"}
        id={id}
        placeholder={placeholder}
        className={`input input-${id}`}
      />
    </>
  );
};

export default FormField;

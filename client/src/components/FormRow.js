import React from "react";

export const FormRow = ({
  type,
  name,
  onChange,
  labelText,
  value,
  className,
}) => {
  return (
    <div className={className ? className : "form-row"}>
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        placeholder={name}
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

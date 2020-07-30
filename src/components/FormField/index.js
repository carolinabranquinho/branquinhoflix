import React from "react";

function FormField({ type, name, value, onChange, label }) {
  return (
    <div>
      <label>
        {label}
        <input name={name} type={type} onChange={onChange} value={value} />
      </label>
    </div>
  );
}

export default FormField;

import React from "react";
import "./style.css";

export default function ButtonObj3D({ title, onClick, disabled }) {
  return (
    <button
      className="button"
      style={{ backgroundColor: disabled ? "#667f67" : "#4caf50" }}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

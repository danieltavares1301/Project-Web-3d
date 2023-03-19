import React from "react";
import "./style.css";

export default function ButtonObj3D({ title, onClick, disable }) {
  return (
    <button className="button" onClick={onClick} disabled={disable}>
      {title}
    </button>
  );
}

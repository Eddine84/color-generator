import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>Welcom to Eddine Color Generator ! </h4>
      <form className="color-form">
        <input type="color" value={color} onChange={handleColor} />
        <input
          type="text"
          onChange={handleColor}
          value={color}
          placeholder="#f15025"
        />
        <button
          className="btn"
          style={{ background: color }}
          type="submit"
          onClick={handleSubmit}
        >
          Generate Color
        </button>
      </form>
    </section>
  );
};

export default Form;

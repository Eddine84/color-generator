import React from "react";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <article className="colors">
      {colors.map((color, index) => {
        return (
          <SingleColor key={crypto.randomUUID()} index={index} color={color} />
        );
      })}
    </article>
  );
};

export default ColorList;

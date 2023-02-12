import React from "react";

const HOC = (Propect) => (props) => {
  //console.log(Propect);
  const color = ["red", "blue", "green", "black", "cyan", "yellow", "white"];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  console.log("New color :")
  console.log(randomColor)

  return (
    <>
      <Propect cardName={props.cardName} cardDescription={props.cardDescription} newColor={randomColor} />
    </>
  );
};

export default HOC;
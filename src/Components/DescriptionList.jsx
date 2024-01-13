import React from "react";

const DescriptionList = ({ descString }) => {
  const Paragraphs = descString?.split(" /n/n" && "\n");

  return (
    <>
      {Paragraphs?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </>
  );
};

export default DescriptionList;

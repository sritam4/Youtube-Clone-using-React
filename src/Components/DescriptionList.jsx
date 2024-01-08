import React from "react";

const DescriptionList = ({ descString }) => {
  const Paragraphs = descString?.split(" /n/n" && "\n");
  console.log(Paragraphs?.length);

  return (
    <>
      {Paragraphs?.map((item, index) => {
        return (
          <>
            {console.log(item)}
            <p key={index}>{item}</p>
          </>
        );
      })}
    </>
  );
};

export default DescriptionList;

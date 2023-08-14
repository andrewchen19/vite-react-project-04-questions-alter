import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ data }) => {
  return (
    <section className="container">
      <h1>Questions (Alter)</h1>
      {data.map((d) => {
        return <SingleQuestion key={d.id} {...d} />;
      })}
    </section>
  );
};

export default Questions;

import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import custom Hook
import { useAppContext } from "./App";

const SingleQuestion = ({ id, title, info }) => {
  // use custom Hook
  const { activeId, buttonHandler } = useAppContext();

  // 檢查每個 article 的 id 是否與 activeId 相同
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => buttonHandler(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;

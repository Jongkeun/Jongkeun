import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @import url("https://fonts.googleapis.com/css?family=VT323");
  font-family: "VT323", monospace;
`;
const Cursor = styled.span`
  border-left: 0.1em solid #00ff41;
  animation: blink 0.7s steps(1) infinite;
`;
const H1 = styled.h1`
  color: #00ff41;
  font-size: 2rem;
`;

const Typing = ({ heading, dataText }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const handleType = () => {
    const i = loopNum % dataText.length;
    const fullText = dataText[i];
    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
    );
    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  useEffect(() => {
    const type = setTimeout(handleType, typingSpeed);
    return function cleanuo() {
      clearTimeout(type);
    };
    // eslint-disable-next-line
  }, [text, isDeleting]);

  return (
    <ContainerDiv>
      <H1>
        {heading}&nbsp;
        <span>{text}</span>
        <Cursor />
      </H1>
    </ContainerDiv>
  );
};

export default Typing;

import React from 'react';
import styled from 'styled-components';
// import { Button } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

const Button = (props) => {
  return (
    <Mood>
      {props.title}
    </Mood>
  );
}

export default Button;

const Mood = styled.button`
    text-align: center;
    align-content: center;
    margin:30px;
    width: 100px;
    height: 100px;
    border-radius: 30%;
    `
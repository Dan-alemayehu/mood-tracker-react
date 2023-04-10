import React, {useCallback} from 'react';
import styled from 'styled-components';
// import { useState } from 'react';
// import { Button } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

// const [albumRating, setAlbumRating] = useState(0);

// const handleClick = () => {

// };

let Button = ({name, img}) => {
  return (
    <form>
    <Buttons>
      <pic>{img}</pic>
      <Title>{name}</Title>
    </Buttons>
    </form>
  );
}

export default Button;

const Buttons = styled.button`
    margin: auto;
    text-align: center;
    width: 150px;
    height: 150px;
    border-radius: 30%;
    `
const Title = styled.h2`
    color: black;

`
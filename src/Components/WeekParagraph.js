import React from 'react';
import styled from 'styled-components';

function WeekParagraph() {
  return (
    <Status>This week has been</Status>
  );
}

export default WeekParagraph;

const Status = styled.h3`
    text-aligned: center;
    color: #f0911d;
    font-size: 50px;
`
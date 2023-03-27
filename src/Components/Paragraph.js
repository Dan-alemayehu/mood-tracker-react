import React from 'react';
import styled from 'styled-components';
function Paragraph() {
  return (
    <>
    <Sentence>We'll compile the data you input to summarize your mood fot the week, month and year</Sentence>
    </>
  );
}

export default Paragraph;

const Sentence = styled.p`
    text-align: center;
    color: #23f507
    `
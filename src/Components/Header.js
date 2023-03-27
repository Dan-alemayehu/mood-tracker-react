import React from 'react';
import styled from 'styled-components';
function Header() {
  return (
    <>
    <Heading>What's Your Mood Today?</Heading>
    </>
  );
}

export default Header;

const Heading = styled.h1`
    text-align: center;
    color: #0cb9ed
    `
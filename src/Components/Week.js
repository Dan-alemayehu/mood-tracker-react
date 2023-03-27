import React from 'react';
import styled from 'styled-components';
import WeekParagraph from './WeekParagraph';
import WeekMood from './WeekMood';

function Week() {
  return (
    <>
    <WeekParagraph />
    <WeekMood 
        title="Successful"
    />
    </>
  );
}

export default Week;

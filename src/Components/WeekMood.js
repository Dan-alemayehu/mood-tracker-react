import React from 'react';
import styled from 'styled-components';

const WeekMood = (props) => {
  return (
    <Mood>
    {props.title}
    {props.bgColor}
    </Mood>
  );
}

export default WeekMood;

const Mood = styled.button`
    text-align: center;
    align-content: center;
    margin:30px;
    width: 450px;
    height: 450px;
    border-radius: 30%;
    `
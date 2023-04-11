import React, {useState} from 'react';
import styled from 'styled-components';
import InputMessage from './Input';
// import MoodList2 from '../Components/PrevMoodList';
// import WeekParagraph from '../Components/WeekParagraph';
// import the moods data
import moods from '../mood-data';
//import components
import Button from './MoodButton';


const MoodList = (props) => {

  const [mood, setMood] =useState(null)

  const handleChange = () => {
    setMood(console.log('yo'))
  }
  

  return (
    <>
    {moods.map(mood=> 
       <span onClick={() => handleChange}>
        <Button
        // {...mood}
        name={mood.name}
        key={mood.id.toString()}
        />
        </span>
      )}
      <InputMessage />
      {/* <WeekParagraph />
      <MoodList2 /> */}
    </>
  );
}

export default MoodList;

const text = styled.p`
  color: white;
`



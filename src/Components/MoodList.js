import React, { useState } from 'react';
import styled from 'styled-components';
import InputMessage from './Input';
// import MoodList2 from '../Components/PrevMoodList';
// import WeekParagraph from '../Components/WeekParagraph';
// import the moods data
import moods from '../mood-data';
//import components
import Button from './MoodButton';
import WeekParagraph from './WeekParagraph';


const MoodList = (props) => {

  const [messages, setMessages] = useState([])

  const [messageInfo, setMessageInfo] = useState({
    name: '',
  });

  // const current = new Date();
  // const date = `${current.getMonth() +1}/${current.getDate()}/${current.getFullYear()}`;

  const handleClick = (event) => {
    event.preventDefault();
    const newMessage = {
      name: messageInfo.name,
    };
    setMessages([...messages, newMessage]);
    setMessageInfo({
      name: '',
    })
  }


  return (
    <>
      {moods.map(mood =>
        <span onClick={handleClick}>
          <Button
            // {...mood}
            name={mood.name}
            key={mood.id.toString()}
          // value={messageInfo.name}
          // onChange={handleInputChange}
          />
        </span>
              )}
                <WeekParagraph />;
        {messages.map((message, index) => (
           <div key={index}>
            <Button>
                <h3>{message.name}</h3>
            </Button>
            {/* <Log>Date of Entry: {date}</Log> */}
            </div> 
        ))}
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
const Log = styled.p`
    color: white;
`



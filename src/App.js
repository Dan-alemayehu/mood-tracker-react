import logo from './logo.svg';
import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import Paragraph from './Components/Paragraph';
import MoodList from './Components/MoodList';
// import WeekParagraph from './Components/WeekParagraph';
// import MoodList2 from './Components/PrevMoodList';
// import moods from './mood-data';

const App = (props) => {

  const [moods, setMoods] = useState(null);

  return (
    <>
      <div>
        <Header />
        <SubHeader />
      </div>
      <Splits>
        <MoodList moodCategories={moods} />
      </Splits>
      <div>
        <Paragraph />
      </div>
      <div className="split3">
      {/* <WeekParagraph />
      <MoodList2 callback{...setMoods}/> */}
      </div>
    </>
  );
}

const Splits = styled.div`
margin: 10px 400px 10px 400px;
display: flex;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    gap: 50px;
    flex-shrink: 0;
`

export default App;

import logo from './logo.svg';
import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import Paragraph from './Components/Paragraph';
import Button from './Components/Mood';
import Week from './Components/Week';


function App() {
  return (
    <>
      <div>
        <Header />
        <SubHeader />
      </div>
      <Split>
        <Button 
          title="Happy"
         />
        <Button 
          title="Sad"
        />
        <Button 
          title="indifferent"
        />
      </Split>
      <Split1>
        <Button 
          title="angry"
        />
        <Button 
          title="Awkward"
        />
        <Button
          title="Content"
        />
      </Split1>
      <Split2>
        <Button
          Color="blue"
          appearance='primary'
          title="Lazy"
        />
        <Button
          title="Busy"
        />
        <Button 
          title="Calm"
        />
      </Split2>
      <div>
        <Paragraph />
      </div>
      <div className="split3">
        <Week />
      </div>
    </>
  );
}

const Split = styled.div`
text-align: center
`

const Split1 = styled.div`
text-align: center
`

const Split2 = styled.div`
text-align: center
`
const Split3 = styled.div`
text-align: center
`


export default App;

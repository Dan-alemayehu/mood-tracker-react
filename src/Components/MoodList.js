import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
// import the moods data
import moods from '../mood-data';
//import components
import Button from './MoodButton';
import MoodList2 from './PrevMoodList';

const MoodList = () => {

  // const handleSubmit = () => {
  //   <>
  //   {moods.map(mood=> 
  //     <div>
  //     {...mood}
  //       key={mood.id}
  //       onClick={handleSubmit}
  //     </div>
  //   )}
  // </>
  // }

  return (
    <>
    {moods.map(mood=> 
        <Button
        {...mood}
          key={mood.id}
          // onClick={handleSubmit}
        />
      )}
    </>
  );
}

export default MoodList;



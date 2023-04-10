import React, {useState} from 'react';
import styled from 'styled-components';
// import the moods data
//import components
import Button from './MoodButton';

// const MoodList2 = () => {
//   const [mood, setMood] = useState('');

//   const handleChange = (event) => {
//     setMood(event.target.mood)
//     previousMoods.push(event.target.mood)
//   }


//   return (
//     <>
//     {previousMoods.map(mood=> 
//         <Button onChange={handleChange}
//         {...mood}
//           key={mood.id}
//         />
//       )}
//     </>
//   );
// }

const MoodList2 = () => {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items,{
      id: items.length,
      value: 'Button',
    }])
  }

  return (
    <div>
      <Button />
      <ul>
        {items.map(item => (
        <li key={item.id}>{item.value}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default MoodList2;
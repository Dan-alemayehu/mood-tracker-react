import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeekParagraph from "./WeekParagraph";

function InputMessage() {

    const [messageInfo, setMessageInfo] = useState({
            name: '',
        });

    const current = new Date();
    const date = `${current.getMonth() +1}/${current.getDate()}/${current.getFullYear()}`;

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newMessage = {
            name: messageInfo.name,
        };
        setMessages([...messages, newMessage]);
        setMessageInfo({
            name: '',
        })
    }

    const [messages, setMessages] = useState([])

    const handleInputChange = (event) => {
        setMessageInfo({
            ...messageInfo,
            [event.target.name]: event.target.value
        })
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Respective>
                Enter in a mood selected from the options above:             
                <input 
                    type="text" 
                    name="name" 
                    value={messageInfo.name}
                    onChange={handleInputChange}
                    />
            </Respective>
            <button type="submit">
                Submit
            </button>
        </form>
        <WeekParagraph />
        {messages.map((message, index) => (
           <div key={index}>
            <Button>
                <h3>{message.name}</h3>
            </Button>
            <Log>Date of Entry: {date}</Log>
            </div> 
        ))}
        </>
    );
}

export default InputMessage;

const Respective = styled.label`
    color: white;
`
const Button = styled.button`
    margin: auto;
    text-align: center;
    width: 150px;
    height: 150px;
    border-radius: 30%;
`

const Log = styled.p`
    color: white;
`
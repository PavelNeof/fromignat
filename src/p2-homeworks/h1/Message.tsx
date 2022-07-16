import React from 'react'
import m from './Message.module.css';

type MessageType = {
    avatar?: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div>
            <div className={m.avatar}>
                <img src={props.avatar}
                     className={m.img}/> </div>
            <div className={m.corner}></div>
            <div className={m.all}>
                <div className={m.name}>  {props.name}</div>
                <div className={m.text}>  {props.message}</div>
                <div className={m.time}>  {props.time}</div>
            </div>
        </div>
    )
}

export default Message

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
        <div className={m.message}>

                <img src={props.avatar} alt={'avatar'} className={m.avatar}/>

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

import React from 'react';
import './Card.css'



function Card(props) {
    return (
        <div className='box'>
            <h2 className="user-name">User Name : {props.UserId}</h2>
            <h2 className="user-age">User Age : {props.UserAge}</h2>
        </div>
    );
}
export default Card;
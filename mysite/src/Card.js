import React, { useState } from 'react';
import './Card.css'
import { MdModeEdit } from "react-icons/md";

function Card(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(props.UserId);
    const [editAge, setEditAge] = useState(props.UserAge);

    // 3. The function that runs when you hit "Save"
    const saveChanges = () => {
        // Send the new data UP to App.js using the prop function
        props.onEdit(props.index, editName, editAge);
        // Turn off edit mode
        setIsEditing(false);
    };


    if (!isEditing) {
        return (
            <div className='box'>
                <div className='edit-button' onClick={() => setIsEditing(true)}>
                    <MdModeEdit />
                </div>
                <h2 className="user-name">User Name : {props.UserId}</h2>
                <h2 className="user-age">User Age : {props.UserAge}</h2>
            </div>
        );
    }
    else if (isEditing) {
        return (
            <div className='box'>
                <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                />
                <input
                    type="number"
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                />
                <button onClick={saveChanges}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        );
    }
}
export default Card; 
import React from 'react';
import cardImage from '../images/img_avatar.png'

const Student = (props) => {
    return (
        <div class="card">
            <img id="card" src={cardImage} alt="Avatar" />
            <div class="container">
                <h4><b>{props.name}</b></h4>
                <p>{props.role}</p>
            </div>
        </div>
    )
}

export default Student;
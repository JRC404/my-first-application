import React from 'react';

const Movies = (props) => {
    return (
        <div>
            <ul>
                {/* props is an object... adding values to the object */}
                <li>Title: {props.title}</li>
                <li>Description: {props.description}</li>
                <li>Continue: {props.watching}</li>
            </ul>
        </div>
    )
}

export default Movies;
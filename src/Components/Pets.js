import React from 'react';

const Pet = (props) => {
    /**
     * create a component that allows the user to show off their pets...
     * age, species, fave food, legs, walks etc...
     * pass props through inside the app component
     * display that in the app component
     */
    return (
        <div>
            <p>My pet is called {props.name}, the species is {props.species} and its fave food is {props.faveFood}</p>
        </div>
    )
}

export default Pet;
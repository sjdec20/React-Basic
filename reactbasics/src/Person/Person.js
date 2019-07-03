import React from 'react';

const Person = (props) =>{
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old</p>
            <input type='text' onChange={props.changed}/>
        </div>
    )
}

export default Person;
import React, {useState} from 'react';
import Person from './Person/Person';

const App = () => {
  const [PersonState, setPersonState] = useState({
      persons: [
          {id:'p1',name: 'Sam', age: 27},
          {id:'p2',name: 'Jerlin', age: 26},
          {id:'p3',name: 'Zara', age: 1}
      ],
  })

  const [showPersonsState, setshowPersonsState] = useState({
    showPersons: false
  })

  const switchNameHandler = () =>{
  setPersonState({
      persons: [
        {id:'p1',name: 'Mikey', age: 27},
        {id:'p2',name: 'Jose', age: 26},
        {id:'p3',name: 'Celine', age: 1}
    ],
  })
}

const showPersons = () =>{
  setshowPersonsState({
    showPersons: true
  })
}
  const nameChangeHandler = (event, id) =>{
    let personIndex = PersonState.persons.findIndex(p => {
      return p.id === id
    })
    let persons = [...PersonState.persons];
    let person = {
      ...PersonState.persons[personIndex]
    }
    person.name = event.target.value;
    persons[personIndex] = person;
    setPersonState({
      persons : persons
    })   
  }

  let persons = PersonState.persons.map((person, index) => {
    return (
      <div key={person.id}>
        <Person name= {person.name} age={person.age} index={index} changed={(event)=>(nameChangeHandler(event,person.id))}/>
      </div>
    )
  })

  return (
    <div className="App">
      <body>
          <h1>
             Basics of React features can be leart here
          </h1>
          <button onClick={showPersons}>Show Persons</button>    
          {
            (showPersonsState.showPersons ? (<div>{persons}</div>): null)                  
          }  
          {
            (showPersonsState.showPersons ? ( <div>
              <button onClick={switchNameHandler}>Switch Names</button>
            </div>): "")
           
          }     
      </body>
    </div>
  );
}

export default App;

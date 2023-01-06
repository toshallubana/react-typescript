import React from 'react';
import './App.css';
import Greet from './Components/Greet';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Status from './Components/Status';
import Oscar from './Components/Oscar';
import Heading from './Components/Heading';
import Button from './Components/Button';
import Input from './Components/Input';

function App() {

  const personName = {
    firstName: 'Toshal',
    lastName: 'lubana'
  }

  const nameList = [
    {
      first: 'Toshal',
      last: 'Lubana'
    },
    {
      first: 'Naitik',
      last: 'Lubana'
    },
    {
      first: 'Jass',
      last: 'Lubana'
    }
  ]

  return (
    <div className="App">
      <Greet name="toshal" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading'/>
      <Oscar>
        <Heading>
          this is a test value
        </Heading>
      </Oscar>

      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }} />


      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;

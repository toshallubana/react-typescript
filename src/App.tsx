import React from 'react';
import './App.css';
// import Greet from './Components/Greet';
// import Person from './Components/Person';
// import PersonList from './Components/PersonList';
// import Status from './Components/Status';
// import Oscar from './Components/Oscar';
// import Heading from './Components/Heading';
// import Button from './Components/Button';
// import Input from './Components/Input';
// import Container from './Components/Container';
// import LoggedIn from './Components/state/LoggedIn';
// import Counter from './Components/Counter';

import {ThemeContextProvider} from './Components/context/ThemeContext';
import {Box} from './Components/context/Box';
import './App.css';

import { UserContextProvider } from './Components/userContext/UserContext';
import LoggedIn from './Components/state/LoggedIn';

function App() {

//   const personName = {
//     firstName: 'Toshal',
//     lastName: 'lubana'
//   }

//   const nameList = [
//     {
//       first: 'Toshal',
//       last: 'Lubana'
//     },
//     {
//       first: 'Naitik',
//       last: 'Lubana'
//     },
//     {
//       first: 'Jass',
//       last: 'Lubana'
//     }
//   ]

  return (
    <div className="App">

      <UserContextProvider>
        <LoggedIn />
      </UserContextProvider>
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <Greet name="toshal" messageCount={10} isLoggedIn={false} />
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

      <Input value='' handleChange={(event) => console.log(event)} /> */}

      {/* <Container styles={{border: '1px solid black', padding: '1rem'}} />

      <LoggedIn /> */}

      {/* <Counter /> */}
    </div>
  );
}

export default App;

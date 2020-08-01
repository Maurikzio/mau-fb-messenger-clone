import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [ input, setInput ] = useState('');
  const [ messages, setMessages ] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('')
  }

  return (
    <div className="App">
      <center>
      <FormControl>
        <InputLabel >Email address</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)}/>
        <Button disabled={!input} variant="contained" color='primary'>Send message</Button>
      </FormControl>
      </center>

      {
        messages.map((message, ind) => (
          <p key={ind}>{message}</p>
        ))
      }
    </div>
  );
}

export default App;

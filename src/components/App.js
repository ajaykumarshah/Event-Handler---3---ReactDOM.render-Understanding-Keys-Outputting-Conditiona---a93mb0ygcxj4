import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) => {
    if (event.target.value == 'k') {
      event.target.value = 'ok';
      console.log('ok');
    }
    if (event.target.value == 5) {
      event.target.value = 15;
      console.log(15);
    }
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput} />

      <br />
      <br />

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" type={'number'} onChange={handleInput} />
      <br />
    </div>
  )
}


export default App;

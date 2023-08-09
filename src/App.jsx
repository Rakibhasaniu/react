import { useState } from 'react';
import './App.css'

const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });


  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    })
  }

  const handleClear = () => {
    setInputState({
      ...InitialInputState
    })
  }

  const handleOperations = (Operations) => {
    console.log(Operations);
  }
  // const handleInputFields = (key, value) => {

  // }
  // const handleInputFields = (inp) => {
  //   setInputState({
  //     ...inputState,
  //     ...inp
  //   })
  // }
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result:0</h1>
      <div>
        <p>Input</p>
        <input type="number" value={inputState.a} onChange={handleInputFields} name='a' />
        <input type="number" value={inputState.b} onChange={handleInputFields} name='b' />
      </div>
      <div>
        <p>Operations</p>
        <button onClick={() => handleOperations('+')}>+</button>
        <button onClick={() => handleOperations('-')}>-</button>
        <button onClick={() => handleOperations('*')}>*</button>
        <button onClick={() => handleOperations('/')}>/</button>
        <button onClick={handleClear}>reset</button>
      </div>
      <div>
        <p>History</p>
        <p>
          <small>There is no history</small>
        </p>
      </div>
    </div>
  )
}

export default App;

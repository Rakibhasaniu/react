import { useState } from 'react';
import './App.css'

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }

}

const getId = generateId();


const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);


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
    setResult(0);
  }

  const handleOperations = (Operation) => {
    const fun = new Function(
      'operation',
      `
      return ${inputState.a} ${Operation} ${inputState.b}
      `

    )
    // console.log(fun)
    // console.log(fun(Operation));
    setResult(fun(Operation));
    //TODO: 2ND OPTION
    // setResult(eval(`${inputState.a} ${Operation} ${inputState.b}`))
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
      <h1>{result}</h1>
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
        <ul>
          <li>
            <p>Operation: 10 * 20, Result: 30</p>
            <small>5/14/2022</small>
            <br />
            <button>
              restore
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App;

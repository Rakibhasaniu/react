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
  const [historylist, setHistorylist] = useState([]);


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

    if (!inputState.a ||
      !inputState.b) {
      alert("Invalid Input");
      return
    }

    const fun = new Function(
      'operation',
      `
      return ${inputState.a} ${Operation} ${inputState.b}
      `

    )
    const result = fun(Operation);
    // console.log(fun)
    // console.log(fun(Operation));
    setResult(result);
    //TODO: 2ND OPTION
    // setResult(eval(`${inputState.a} ${Operation} ${inputState.b}`))

    const historyItem = {
      id: getId.next().value,
      inputs: inputState,
      Operation,
      result,
      date: new Date(),

    };
    setHistorylist([historyItem, ...historylist])
    // console.log(history);
  }
  const handleRestore = (history) => {
    setInputState({ ...history.inputs })
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
        {historylist.length == 0 ? <p>
          <small>There is no history</small>
        </p> : <ul>
          {historylist.map((historyItem) => (
            <li key={historyItem.id}>
              <p>Operation: {historyItem.inputs.a} {historyItem.Operation} {historyItem.inputs.b}, Result: {historyItem.result}</p>
              <small>{historyItem.date.toLocaleDateString()}{' '}{historyItem.date.toLocaleTimeString()}</small>
              <br />
              <button onClick={() => handleRestore(history)}>
                restore
              </button>
            </li>
          ))}

        </ul>}


      </div>
    </div>
  )
}

export default App;



import './App.css'

function App() {


  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result</h1>
      <div>
        <p>Input</p>
        <input type="number" />
        <input type="number" />
      </div>
      <div>
        <p>Operations</p>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>reset</button>

      </div>
    </div>
  )
}

export default App

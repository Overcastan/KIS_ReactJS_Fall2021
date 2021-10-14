import './App.css';
import {Counter} from './Counter';



function App() {
  return (
    <div className="App">
        <div>
            <Counter counterNumber="first" start={0}/>
        </div>
        <div>
            <Counter counterNumber="second" start={10}/>
        </div>
    </div>
  );
}

export default App;

import './App.css';
import {Counter} from './Counter';

const background = {
    backgroundColor: "beige"
}

function App() {
  return (
    <div className="App" style={background}>
        <div>
            <Counter counterNumber={"first"} start={0}/>
        </div>
        <div>
            <Counter counterNumber={"second"} start={10}/>
        </div>
    </div>
  );
}

export default App;

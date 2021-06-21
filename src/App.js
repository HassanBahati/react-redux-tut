import "./App.css";
import { useSelector , useDispatch} from "react-redux";
import {increment, decrement} from './Actions/index'
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  //usedispatch gives ablility to dispatch an actioin 
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable info shouldnt see if not logged in</h3> : ''}
    </div>
  );
}

export default App;

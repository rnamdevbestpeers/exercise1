import logo from './logo.svg';
import './App.css';
import OverLay from '../src/Pages/OverLay'
import createStore from '../src/Redux/store/store'
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={createStore}>
      <OverLay/>
      </Provider>
    </div>
  );
}

export default App;

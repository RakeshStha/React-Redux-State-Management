
import './App.css';
import Menu from './components/MenuComponent'
import Hook from './components/HookComponent';
import {Provider} from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux State Management</h1>
      <Menu/>
      <Hook/>
    </div>
    </Provider>
  );
}

export default App;

import {createStore} from 'redux';
import bookReducer from './data/Reducer'


const store = createStore(bookReducer);

export default store;
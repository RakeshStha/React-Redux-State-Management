import {BUY_BOOK, ADD_BOOK} from './Type'

const initialState={
    Book:100
}

const bookReducer=(state=initialState, action)=>{
    switch(action.type){
        case BUY_BOOK:return{
            ...state,
                Book: state.Book - action.payload
        }
        case ADD_BOOK:return{
            ...state,
            Book: state.Book + + action.payload
        }
        default:return state;
    }
}

export default bookReducer;
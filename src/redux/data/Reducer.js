import {BUY_BOOK} from './Type'

const initialState={
    Book:10
}

const bookReducer=(state=initialState, action)=>{
    switch(action.type){
        case BUY_BOOK:return{
            ...state,
                Book:state.Book-1,
        }
        default:return state;
    }
}

export default bookReducer;
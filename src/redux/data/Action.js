import {BUY_BOOK, ADD_BOOK} from './Type';


export const buyBook=(number=1)=>{
    return{
        type:BUY_BOOK,
        payload:number
    }
}

export const addBook=(numbers=1)=>{
    return{
        type:ADD_BOOK,
        payload:numbers
    }
}

import React from 'react'
import {buyBook, addBook} from '../redux';
import {connect} from 'react-redux';

function Menu(props){
        return (
            <div>
                <h1>Order Books - {props.Books}</h1>
                <button onClick={props.buyBooks}>Buy Books</button>
                <button onClick={props.addBooks}>Add Books</button>
            </div>
        )
    }

    
const mapStoretoProps=(newstate)=>{
    return{
        Books:newstate.Book
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBooks:()=>dispatch(buyBook()),
        addBooks:()=>dispatch(addBook())
        
    }
}


export default connect(mapStoretoProps, mapDispatchtoProps)(Menu);

import React, { useState } from 'react'
import {buyBook, addBook} from '../redux';
import {connect} from 'react-redux';

function Hook(props){
    const [number, setNumber] = useState(1)
    const [numbers, setNumbers] = useState(1)
        return (
            <div>
                <h1>Hooks Part</h1>
                <h2>Order Books - {props.Books}</h2>
                <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>

                <button onClick={()=>props.buyBooks(number)}>Buy {number} Books</button><br>
                </br>
                <input type="text" value={numbers} onChange={e=>setNumbers(e.target.value)}/>
                <button onClick={()=>props.addBooks(numbers)}>Add {numbers} Books</button>
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
        buyBooks:(number)=>dispatch(buyBook(number)),
        addBooks:(numbers)=>dispatch(addBook(numbers))
        
    }
}


export default connect(mapStoretoProps, mapDispatchtoProps)(Hook);

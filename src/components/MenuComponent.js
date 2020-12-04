import React from 'react'
import {buyBook} from '../redux';
import {connect} from 'react-redux';

function Menu(props){

        return (
            <div>
                <h1>Order Books - {props.Book}</h1>
                <button onClick={props.buyBooks}>Buy Books</button>
            </div>
        )
    }


const mapStoretoProps=(state)=>{
    return{
        Book:state.Book
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBooks:function(){
            dispatch(buyBook());
        }
    }
}

export default connect(mapStoretoProps, mapDispatchtoProps)(Menu);

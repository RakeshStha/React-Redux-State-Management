import React, { Component } from 'react'
import {buyBook} from '../redux';

export class Menu extends Component {
    render() {
        return (
            <div>
                <h1>Order Books</h1>
                <button>Buy Books</button>
            </div>
        )
    }
}

export default Menu

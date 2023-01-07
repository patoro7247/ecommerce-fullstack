
import React, { Component, useState } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css'

import { Heading, Box, Center, Image } from '@chakra-ui/react'


const example = {
    //Picture, Name, Qty
    pic: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.50, 
    qty: 1 
}





function Cart(props) {

    //sets initial state
    const [open, setOpen] = useState(false);

    //user change state when they click on item button
    return (

    <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        <i className="fa-solid fa-cart-flatbed"></i>

        {open && props.children}

        </a>
    </li>
    )
}

function DropMenu() {
    
    function DropdownItem(props) {
        return (
            <div className="menu-item">
                
                <span className="icon-button"><Image className="icon-button" borderRadius='full' boxSize='50px'  src={props.pic} alt='roundpic' /> </span>
                <h2 className='menu-item-name'>{props.name}</h2>
                <p className='menu-item-price'>${props.price}</p>
                <p className='menu-item-qty'>{props.qty}</p>



            </div>
        );
    }
    
    
    return (
        
        <div className="drop">
                <DropdownItem {...example} >
            
                </DropdownItem>
        </div>
    );
}

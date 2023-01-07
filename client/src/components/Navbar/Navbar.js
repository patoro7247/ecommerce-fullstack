import React, { Component, useState } from 'react';

import './Navbar.css'

import { useSelector, useDispatch } from 'react-redux';

import { Heading, Center, Image, Button } from '@chakra-ui/react'
import { clearCart, decrementQty, incrementQty, updateCartTotal, updateCounter } from './../../cartSlice.js';



class Navbar extends Component {
    
    render() {
        return(
            <nav className="NavbarWrapper">

                    <Center >
                        <Heading color="white" textDecoration="none" padding="0.5rem 1rem">Pamazon</Heading>
                    </Center>
                    <Cart>
                        <DropMenu></DropMenu>
                    </Cart>
        
            </nav> 
        )
    }
}

function Cart(props) {

    //sets initial state
    const [open, setOpen] = useState(false);

    //user change state when they click on item button
    let counter = useSelector((state) => state.cart.cartList.length)
 
    return (

    <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => {setOpen(!open); }} >

        <div className="cart-icon-counter-container">
            <i className="fa-solid fa-cart-flatbed"></i>
            <span className="dot"><p className='counter'>{counter}</p></span>
        </div>

        {open && props.children}

        </a>
    </li>
    )
}

function DropMenu() {
    const dispatch = useDispatch()
    //dispatch updateCartTotal on every click 
    let cartList = useSelector((state) => state.cart.cartList)
    let cartTotal = useSelector((state) => state.cart.cartTotal)
    

    // image, name, price, button(-), curr qty, button(+)
    function DropdownItem(props) {
        

        function handleIncrement() {
            dispatch(incrementQty(props.item.id));
            dispatch(updateCartTotal());
            dispatch(updateCounter());
 
            return;
        }

        function handleDecrement() {
            dispatch(decrementQty(props.item.id));
            dispatch(updateCartTotal());
            dispatch(updateCounter());
            return;
        }


        return (
            <div className="menu-item" onClick={() => dispatch(updateCartTotal())}>
                        <div className='image-container'>
                            <Image borderRadius='full' boxSize='50px'  src={props.item.img}/>
                        </div>
                        <h2 className='menu-item-name'>{props.item.name}</h2>
                        <p className='menu-item-price'>${props.item.price}</p>
                        <div className='menu-item-decrement'>
                            <Button onClick={() => handleDecrement()}>-</Button>
                        </div>
                        <p className='menu-item-qty'>{props.item.qty}</p>
                        <div className='menu-item-increment'>
                            <Button onClick={() => handleIncrement()}>+</Button>
                        </div>
                </div>
        );
    }
    
        const handleDropContainer = (e) => {
            e.stopPropagation()
        }
        
        const handleClearButton = () => {
            dispatch(clearCart())
            dispatch(updateCartTotal())
        }

        return (
            
            <div className="drop" onClick={(e) => handleDropContainer(e)}>
                
                    {cartList.map(function(item, i) {
                        return <DropdownItem item={item} key={i} />
                    })}
                    <div className="clear-button-container">
                        <Button onClick={handleClearButton} >Clear</Button>
                    </div>
                    <div className="total-amount-container">
                        {/* Need a calculate total cart slice function
                         */}
                        <p className='total-amount'>Total: ${cartTotal} </p>
                    </div>
            </div>


        );
                }



export default Navbar
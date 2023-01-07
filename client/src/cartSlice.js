import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        cartTotal: 0,
        counter: 0,
    },
    reducers: {
        addToCart: (state, action) => {

            let inArray = false;
            state.cartList.map(function(item) {
                if(action.payload.id === item.id) {
                    item.qty++
                    inArray = true;
                    return
                }
                return
            })

            if(!inArray) {
                state.cartList.push(action.payload)
            }
           
        },
        decrementQty: (state, action) => {
            const id = action.payload;
            state.cartList.map(function(item) {
                if(id === item.id) {
                    if(item.qty > 0) {
                        item.qty--;
                    }                
                }
                return
            })
            
        },
        incrementQty: (state, action) => {
            const id = action.payload;
            state.cartList.map(function(item) {
                if(id === item.id) {
                    if (item.qty < 20) item.qty++;
                        

                }
            })
            
        },
        clearCart: (state) => {
            state.cartList = []
        },
        updateCartTotal: (state) => {
            state.cartTotal = 0;
  

            state.cartList.filter((item) => item.qty >= 1).map(function(item) {
                let singleItemTotal = item.qty * item.price
                state.cartTotal += singleItemTotal
            })

        },
        updateCounter: (state) => {
            state.cartList = state.cartList.filter((item) => item.qty >= 1)
        }
    }

})

export const { addToCart, clearCart, decrementQty, incrementQty, updateCartTotal, updateCounter } = cartSlice.actions
export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const saleSlice = createSlice({
    name: 'sale',
    initialState: {
        cartSales: []
    },
    reducers:{
        addSaleToCart:(state, action) =>{
            state.cartSales.push({
                saleId: action.payload.sale.id,
                quantity: action.payload.quantity
            })
        }
       
    }
})
    
export const getCartSale = state => state.sale.cartSales;
export const {addSaleToCart} = saleSlice.actions;
export default saleSlice.reducer;
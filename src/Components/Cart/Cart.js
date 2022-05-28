import { useSelector } from "react-redux";
import { getItemsToCart, getTotalPrice } from "../../redux/cartSlice";
import { getCartSale } from "../../redux/saleSlice";
import CartItem from "./CartItem";
import CartSale from "./CartSale";

function Cart(){

    const cartItems = useSelector(getItemsToCart);
    const totalPrice = useSelector(getTotalPrice);

    const cartSales = useSelector(getCartSale);

    return(<div className="top">
        <h2 className="cartAmount">СОДЕРЖИМОЕ ВАШЕЙ КОРЗИНЫ</h2>
        {/*
        <img className="buy"  src="https://www.emojiall.com/images/240/twitter/1f6d2.png" width={30} height={30}  alt='' /> */}

        {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem} />)},
        {cartSales.map(cartSale=> <CartSale cartSale={cartSale} /> )}

       

        


       


        <h2 className="cartAmount">ИТОГО: {totalPrice} руб.</h2>

        <div className="btnorder">
        <button className="order"> ОФОРМИТЬ ЗАКАЗ</button>
</div>
    </div>)
}
export default Cart;
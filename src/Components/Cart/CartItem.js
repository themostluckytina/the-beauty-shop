import { useDispatch } from 'react-redux';
import {data} from '../../data/data';
import { removeFromCart } from '../../redux/cartSlice';


function CartItem({cartItem}){
    console.log(cartItem)

    const products = data.find(item=> item.id === cartItem.productId);
    const dispatch = useDispatch();

    return(<div className="top">
         <div className='priceCart'>
         <img className='thing' src={products.img} width={25} height={27} alt='vv' />    
        <p className='itemname'> {products.name} </p>
       
        </div>
        <div className='priceCart'>
        <p className='thing'> {cartItem.quantity} шт. </p> 
        <p className='itemprice'> {products.price * cartItem.quantity} руб. </p>
        </div>
        <span onClick={()=>dispatch(removeFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://w7.pngwing.com/pngs/699/344/png-transparent-computer-icons-rubbish-bins-waste-paper-baskets-eliminate.png" width={40} alt='cc'/> 
        </span>
        
        <hr className='dots'></hr>
    </div>)
}
    export default CartItem;
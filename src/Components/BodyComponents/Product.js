import { useState } from "react";
import { useDispatch } from "react-redux";
import Quantity from "../Cart/ChangeQuantity";
import { addToCart } from "../../redux/cartSlice";

function Product({product} ){

    const [quantity, setQuanity] = useState(1);
    const dispatch = useDispatch()

    return(<div className="things">

        <div></div>
        <p className="call">{product.name} </p>
        <p className="price">Цена: {product.price} руб. </p>
        <img src={product.img} width={200} alt='pp' />
<div>
        <Quantity quantity={quantity} setQuanity={setQuanity} />
        <button  onClick={()=>dispatch(addToCart({product,quantity}))}  >В корзину</button>
</div>
        
    </div>)
   
}

export default Product;
import { useState } from "react";

import Quantity from "../Components/Cart/ChangeQuantity";



function Sale({sale} ){

    const [quantity, setQuanity] = useState(1);
   
    
    return(
    <div className="things">
        <p className="call">{sale.call} </p>
        <p className="price">Цена: <del>{sale.price} </del>  руб.</p>
        <p className="ins"><ins> {sale.newPrice} </ins> руб.</p>
        <img src={sale.pic} width={200} alt='sale' />
        <div>

        <Quantity quantity={quantity} setQuanity={setQuanity} />
        <button >В корзину</button>
</div>
        
     
    </div>)
}
export default Sale;
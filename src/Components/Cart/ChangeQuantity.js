function Quantity({quantity,setQuanity} ){

const addQuantity =()=>{
    
    const newQuantity = quantity+1;
    setQuanity(newQuantity)
}

const removeQuantity=()=>{
    if(quantity<=1) return;
    const newQuantity = quantity -1;
    setQuanity(newQuantity)
}

    return(<div>
        <button className="plus" onClick={addQuantity}>+</button>
        <span>{quantity} </span>
        <button className="minus" onClick={removeQuantity}>-</button>
    </div>)
}
export default Quantity;
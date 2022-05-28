import Sales from "../Sale/Sales";

function MainPageSale(){
    return(<div className="top">

<h2 className="discount">УСПЕЙТЕ ПРИОБРЕСТИ ЭТИ ТОВАРЫ ! </h2>
<h2 className="discount">СКИДКИ до <span className="percent">30 % </span> </h2>


        <Sales />
    </div>)
}
export default MainPageSale;
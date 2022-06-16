import { useState } from "react";
import ChangeLike from "./ChangeLike";




function TestimonialLogic({test}){

    const [plusLike, setPlusLike] = useState(5);

    return(<div>

    <div className="about">
        <div className="testname">
            <p> {test.name} </p>
            <img src={test.foto} width={75} alt='test' />
        </div>
        <div className="testname">
            <p> {test.date} </p>
            <p> {test.rate} </p>
            <p> 👍 {test.plus} </p>
            <p> 👎  {test.minus} </p>
            <p> {test.text} </p>
        </div>
    </div>

    <div className="like">
            <p>Pекомендую oтзыв :</p>

            <ChangeLike plusLike={plusLike} setPlusLike={setPlusLike} />
            
    </div>

    </div>)
}
export default TestimonialLogic;
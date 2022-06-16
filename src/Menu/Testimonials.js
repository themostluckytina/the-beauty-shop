import { Link } from "react-router-dom";
import { dataTestimonials } from '../data/dataTestimonials'
import TestimonialLogic from '../Testimonials/TestimonialLogic';

function Testimonials( ){

        return(<div >

<div className="heading">
        <button className="pen"> 
        <Link to='/AddTestimonial'className="addtest">
         🖊️ ДОБАВИТЬ ОТЗЫВ </Link></button>   
</div>

 <div>
        {
                dataTestimonials
                .map((test, index) => <TestimonialLogic key={index} test={test}/>   )


               
        }
  
 </div>

 





</div>)
}

export default Testimonials;
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/productsSlice";

function Filter({category}){

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch()

    return(<div>
        <p onClick={()=>{dispatch(filterCategory(category))}}
        className={selectedCategory === category?'selectedColor':'color'} >{category}</p>

        <hr></hr>
        
    </div>)
    
}
export default Filter;
import { data } from "../../data/data";
import Product from "./Product";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/productsSlice";

function Products(){

    const selectedCategory = useSelector(getSelectedCategory)
    return(<div className="block">

        {data
        .filter(product =>{
            if(selectedCategory === 'ВСЕ') return true;
            return selectedCategory === product.category
        })
        
        .map((product, index) => <Product key={index} product={product} />)}
       
    </div>)
   
}

export default Products;
import { dataSale } from "../data/dataSale";
import Sale from "./Sale";


function Sales(){
    return(<div className="block">

        {dataSale.map(sale=> <Sale sale={sale} />)}
      

        
     
    </div>)
}
export default Sales;
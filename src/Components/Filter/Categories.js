import Filter from "./Filter";

function Categories(){
    return(<div className="chooseCategory">
        {['ВСЕ', 'ДЛЯ ЛИЦА' , 'ДЛЯ ТЕЛА' , 'ДЛЯ ВОЛОС' , 'ДЛЯ РУК'].map((category, index) => 
            <Filter key={index} category={category} />
            )}
         
        
    </div>)

    
}

export default Categories;
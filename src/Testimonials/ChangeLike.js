function ChangeLike({plusLike, setPlusLike}){

    const addLike=()=> {
        const newLike = plusLike+1;
        setPlusLike(newLike)
    }



    return( <div className=" fullheart">

        <button className="heart" onClick={addLike}>  
            <img className="redheart" src="https://housexy.ru/wp-content/uploads/2021/12/1614511407_152-p-serdtse-na-belom-fone-172.png" alt='heart' width={20} height={20}/>
            </button>
            <div>
            <p className="five">{plusLike}</p>
            </div>
            
            
    </div>)
}

export default ChangeLike;
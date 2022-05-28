function Home(){

    return (<div >
        <br></br>
    <div className="top">
        <img className="image" src="https://sun9-43.userapi.com/impg/UZRFw_EIAEMXkdaufOhn2LXRTzCEufJHMsLFJw/72ZdMsyFLSk.jpg?size=604x449&quality=96&sign=aec035e433cc2880787789772bd62085&type=album" alt="pic" />
        <h1>ДОБРО ПОЖАЛОВАТЬ В <span>THE BEAUTY SHOP</span> </h1>
        <h4 className="welcome">Открой наш мир насыщенных текстур, уникальных ингредиентов и невероятных ароматов! Наш этичный бренд не тестирует косметику на животных и заботится о природе. Мы отвергаем стереотипы красоты и просто создаем косметику для тебя с любовью и заботой. Попробуй наши средства и подари своей коже незабываемый уход.</h4>
        <br></br>
        <h2 className="mail">НАШИ ПРЕИМУЩЕСТВА</h2>
    </div>

<div className="emojis">

    <div>
        <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-big-ben-traveling-xnimrodx-lineal-xnimrodx.png"  width={40} alt='' />
        <p className="from">РОДОМ ИЗ АНГЛИИ</p>
        <p className="garanty">Гарантируем высокое качество производства косметики с 1976 года.</p>

    </div>
    <div className="natural">
        <img src="https://img.icons8.com/ios/100/000000/green-earth.png"  width={30} alt='' />
        <p className="from">ЗАБОТИМСЯ О ПЛАНЕТЕ</p>
        <p className="garanty">Не тестируем косметику на животных и выступаем за переработку пластика.</p>
    </div>
    <div className="natural">
        <img src="https://img.icons8.com/external-others-ghozy-muhtarom/64/000000/external-natural-organic-cosmetic-outline-others-ghozy-muhtarom.png"  width={30} alt='' />
        <p className="from">ВЫБИРАЕМ НАТУРАЛЬНОСТЬ</p>
        <p className="garanty">Используем уникальные ингредиенты из разных уголков мира.</p>
    </div>
    <div className="natural">
        <img src="https://img.icons8.com/ios/50/000000/delivery--v1.png"  width={30} alt='xx' />
        <p className="from">ДОСТАВИМ БЕСПЛАТНО</p>
        <p className="garanty">Привезем заказ по России бесплатно при покупке от 5000 рублей.</p>
    </div>

</div>
<br></br>
<div className="top">
    
    <h2 className="mail">ДЛЯ ПОЛУЧЕНИЯ РАССЫЛКИ</h2> </div>
<form className="top">
    <input type='text' placeholder='введите ваш email' />
    <button className="send">ПОДПИСАТЬСЯ</button>


</form>

<div className="top">
    <img className="image"  src="https://blogdemaquillaje.com/wp-content/uploads/2015/12/body-shop-navidad-ciruela-escarchada.jpg" alt="" />
</div>






    </div>)
}
export default Home;
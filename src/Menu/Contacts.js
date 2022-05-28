function Contacts(){

    return (<div className="top">

        <h2 className="mail">АДРЕСА НАШИХ МАГАЗИНОВ:</h2>
<p className="address"> г.Москва, ул. Большевиков, д.17</p>
<p className="address"> г.Москва, ул. Ленинский проспект, д.68</p>
<p className="address"> г.Москва, ул. Туманова, д.3</p>
<p className="address"> г.Санкт-Петербург, ул. Мякишева, д.5</p>
<p className="address"> г.Казань, ул. Свободы, д.10</p>
<p className="address"> г.Волгоград, ул. Солинная, д.23</p>

<h2 className="mail">МНОГОКАНАЛЬНЫЙ ТЕЛЕФОН:</h2>

<p className="tel">8-800-900-110-99</p>

<h2 className="mail">ВАШИ  ПОЖЕЛАНИЯ И ПРЕДЛОЖЕНИЯ</h2>

<form className="top" >

<div>Сообщение:</div>
    <br></br>
    <div>
    <textarea class="mail" name="message" placeholder="Ваш текст" required=""></textarea></div>
    <br></br>

    <input  className="input"  type='text' placeholder='введите ваш email' />
    <button className="send">ОТПРАВИТЬ</button>

  
</form>

<br></br>
<div>
    <img className="image" src="https://www.thespruce.com/thmb/zYx0cZu5W1oYKArNPIdYvuvoyao=/3000x2084/filters:no_upscale():max_bytes(150000):strip_icc()/the-body-shop-launches-a-new-beauty-movement---beauty-with-heart---22nd-march-2012-141725160-455d583e40c34b2796d2d86348c9745c.jpg" width={600} alt='' />
</div>


    </div>)
}
export default Contacts;
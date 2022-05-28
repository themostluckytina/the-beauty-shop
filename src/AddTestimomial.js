function AddTestimonial() {
    return(<div >
        <div>
            <h2 className="brend">Напишите свой отзыв о нашем бренде</h2>
        </div>

        <form>
            
            <label>Ваше впечатление о нашем продукте</label>
    <textarea  name="message" placeholder=" 20 слов min" required=""></textarea>
    <label> Достоинства: </label>
    <textarea  name="message" placeholder=" 15 слов max" required=""></textarea>
    <label>Недостатки: </label>
    <textarea  name="message" placeholder=" 15 слов max" required=""></textarea>
    
    <label>Общая оценка</label>
    <select>
        <option>⭐⭐⭐⭐⭐ Отлично</option>
        <option>⭐⭐⭐⭐ Хорошо</option>
        <option>⭐⭐⭐ Средне</option>
        <option>⭐⭐ Плохо</option>
        <option>⭐ Ужасно</option>
    </select>
    <label>Рекомендовали бы наш товар друзьям</label>

    <div className="yes">
    <div className="no"><input type="radio" name="friend" /> Да</div>
    <div className="no"> <input type="radio" name="friend" /> Нет</div>
    
    </div>
    <label></label>

    
    <div>
            <h4 className="yourname">Расскажите о себе</h4>
        </div>
        <label>Ваше имя/ник</label>
        <input className="input"  type="text" placeholder="имя/ник"/>
        <label>Ваш электроный адрес</label>
        <input className="input" type='email' placeholder="email" />
        <label>Ваш возраст</label>
        <div className="yes">
    <div className="no"><input type="radio" name="good" /> 18-25</div>
    <div className="no"> <input type="radio" name="good" /> 26-35</div>
    <div className="no"> <input type="radio" name="good" /> 36-45</div>
    <div className="no"> <input type="radio" name="good" /> 46 и старше</div>

    
    
    </div>
</form>

         
<div className="btnorder">
        <button className="send"> ОПУБЛИКОВАТЬ</button>
</div>



    </div>
    )
}
export default AddTestimonial;
import React, { useState } from 'react'

function Login({onLogin}) {
const [email, setEmail] = useState('');
const [password, setPassword]= useState('');

function handleEmail(e) {
    setEmail(e.target.value);
};

function handlePassword(e) {
    setPassword(e.target.value)
};

function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onLogin({
        email, password
    }); 
}
console.log('Login component is being rendered');

	return(
        <div className='reglog'>
            <h2 className='reglog__header'>Вход</h2>
            <form className='reglog__form' onSubmit={handleSubmit}>
                <input
                    id="email-input"
                    type="email" 
                    className="reglog__input"
                    placeholder="Email"
                    minLength="2" maxLength="40"
                    required
                    value={email}
                    onChange={handleEmail}
                />
                <input 
                    id="password-input"
                    type="password" 
                    className="reglog__input"
                    placeholder="Пароль"
                    required
                    value={password}
                    onChange={handlePassword}
                />
                <button className="reglog__button">Войти</button>
            </form>
        </div>
    )
}

export default Login;
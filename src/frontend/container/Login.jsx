import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import iconGoogle from '../assets/static/ico-google.png';
import iconTwitter from '../assets/static/ico-twitter.png';
import '../assets/styles/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handlSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <form className='login__container--form' onSubmit={handlSubmit}>
          <h2 className='form--titulo'>Inicio Sesión</h2>
          <input
            name='email'
            className=' input inputLineaInferior form--titulo__correo'
            type='email'
            placeholder='Correo'
            onChange={handleInput}
            required
          />
          <input
            name='password'
            className=' input inputLineaInferior form--titulo__clave'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
            required
          />
          <button type='submit' className='botonRedondoBlanco'>Inciar sesión</button>
          <hr />
          <div className='form--opciones'>
            <label htmlFor='recordarme'>
              <input type='checkbox' placeholder='Recuérdame' id='recordarme' name='recordarme' />
              Recuerdame
            </label>
            <hr />
            <a href='X'>Olvidé mi contraseña</a>
          </div>
        </form>
        <div className='login__container--socialMedia'>
          <div className='socialMedia--google socialMedia'>
            <img src={iconGoogle} alt='google' />
            <p>Iniciar sesión con Google</p>
          </div>
          <div className='socialMedia--twitter socialMedia'>
            <img src={iconTwitter} alt='Twitter' />
            <p>Iniciar sesión con Twitter</p>
          </div>
        </div>
        <div className='login__container--registro'>
          <p>
            No tienes ninguna cuenta
            <Link to='/registro'>
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

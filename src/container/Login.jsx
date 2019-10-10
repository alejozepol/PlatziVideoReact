import React from 'react';
import { Link } from 'react-router-dom';
import iconGoogle from '../assets/static/ico-google.png';
import iconTwitter from '../assets/static/ico-twitter.png';
import '../assets/styles/Login.scss';

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <form className='login__container--form'>
        <h2 className='form--titulo'>Inicio Sesión</h2>
        <input className=' input inputLineaInferior form--titulo__correo' type='email' placeholder='Correo' required />
        <input className=' input inputLineaInferior form--titulo__clave' type='password' placeholder='Contraseña' required />
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

export default Login;

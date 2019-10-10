import React from 'react';
import '../assets/styles/Register.scss';

const Register = () => (
  <section className='register'>
    <div className='register__container'>
      <form className='register__container--form'>
        <h2 className='form--titulo'>Registro</h2>
        <input className=' input inputLineaInferior form--titulo__correo' type='email' placeholder='Correo' required />
        <input className=' input inputLineaInferior form--titulo__nombre' type='text' placeholder='Nombres' required />
        <input className=' input inputLineaInferior form--titulo__clave' type='password' placeholder='Contraseña' required />
        <label htmlFor='acepto'>
          <input type='checkbox' placeholder='Acepto' id='acepto' name='acepto' />
          Terminos y condiciones
        </label>
        <button type='submit' className='botonRedondoBlanco'>Registrarme</button>
        <hr />
      </form>
      <div className='register__container--registro'>
        <p>
          Ya tienes cuenta
          <a href='x'>
            Inicia Sesión
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };
  return (
    <section className='register'>
      <div className='register__container'>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <h2 className='form--titulo'>Registro</h2>
          <input
            name='email'
            className='input inputLineaInferior form--titulo__correo'
            type='email'
            placeholder='Correo'
            onChange={handleInput}
            required
          />
          <input
            name='name'
            className='input inputLineaInferior form--titulo__nombre'
            type='text'
            placeholder='Nombres'
            onChange={handleInput}
            required
          />
          <input
            name='password'
            className='input inputLineaInferior form--titulo__clave'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
            required
          />
          <label htmlFor='acepto'>
            <input type='checkbox' placeholder='Acepto' id='acepto' name='acepto' required />
            Terminos y condiciones
          </label>
          <button type='submit' className='botonRedondoBlanco'>Registrarme</button>
          <hr />
        </form>
        <div className='register__container--registro'>
          <p>
            Ya tienes cuenta
            <Link to='login'>
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);

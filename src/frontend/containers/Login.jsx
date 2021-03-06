import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loginUser } from '../actions';
import Header from '../components/Header';

import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };
  return (
    <>
      <Header />
      <section className='login'>
        <div className='login__container'>
          <h2>Inicio de sesión</h2>

          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              type='text'
              placeholder='Correo'
              className='form--input'
              onChange={handleInput}
            />
            <input
              name='password'
              type='password'
              placeholder='Contraseña'
              className='form--input'
              onChange={handleInput}
            />
            <button className='form--button letters' type='submit'>Inicio de sesión</button>
            <div className='form--remember letters'>
              <label htmlFor='boxRemember'>
                <input type='checkbox' id='boxRemember' value='boxRem' />
                Recuérdame
              </label>
              <a href='/'>¿Olvidé mi contraseña?</a>
            </div>
          </form>

          <div className='login__container--social-media letters'>
            <div>
              <span>
                <FontAwesomeIcon icon={['fab', 'google']} />
              </span>
              Inicia sesión con Google
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </span>
              Inicia sesión con Twitter
            </div>
          </div>

          <p className='login__container--register letters'>
            No tienes ninguna cuenta
            <Link to='/register'>
              Regístrate.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);

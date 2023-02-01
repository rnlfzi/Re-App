import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="register-page">
      <header className="register-page__hero">
        <h1><HiUserGroup /></h1>
      </header>
      <article className="register-page__main">
        <h2>
          <strong>Do it now or never!,</strong>
          {' '}
          <br />
          Let&apos;s create your Account
        </h2>
        <RegisterInput register={onRegister} />

        <p>
          Sudah punya akun?
          {' '}
          <Link to="/">
            <strong>Masuk</strong>
          </Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;

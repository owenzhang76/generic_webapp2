import i18n from 'i18next';import k from "./../i18n/keys";import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RegisterForm = props => {

  const username = useSelector(state => state.username);
  const firstname = useSelector(state => state.firstname);
  const lastname = useSelector(state => state.lastname);
  const email = useSelector(state => state.email);

  // password is not shared outside of this form.
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onChangeUsername = e => {
    dispatch({
      type: "SET_USERNAME",
      text: e.target.value });

  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    
    const registerInfo = {
      username,
      firstname,
      lastname,
      email,
      password 
    };

    props.registerUser(registerInfo);
  };

  return (
    <form className="register-form animate__animated animate__fadeInUp animate__delay-3s" onSubmit={onSubmit}>
            <div className="form-names-container">
                <div className="form-div long-input">
                    <label>{i18n.t(k.FIRST)}</label>
                    <input id="firstname-submit" type="text" value={firstname} onChange={onChangeFirstname} />
                </div>
            </div>
            <div className="form-div">
                <label>{i18n.t(k.PASSWORD)}</label>
                <input id="password-submit" type="text" value={password} onChange={onChangePassword} />
            </div>
            <div className="form-div-button">
                <button className="register-button" href="#">{i18n.t(k.REGISTER)}</button>
            </div>
        </form>);
};

export default RegisterForm;


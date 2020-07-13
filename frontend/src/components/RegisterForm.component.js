import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const RegisterForm = (props) => {

    const username = useSelector(state => state.username);
    const firstname = useSelector(state => state.firstname);
    const lastname = useSelector(state => state.lastname);
    const email = useSelector(state => state.email);

    // password is not shared outside of this form.
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        dispatch({
            type: "SET_USERNAME",
            text: e.target.value,
        })
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    };

    const onChangeEmail = (e) => {
        dispatch({
            type:"SET_EMAIL",
            text: e.target.value,
        })
    };

    const onChangeFirstname = (e) => {
        dispatch({
            type:"SET_FIRSTNAME",
            text: e.target.value,
        })
    };

    const onChangeLastname = (e) => {
        dispatch({
            type:"SET_LASTNAME",
            text: e.target.value,
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const registerInfo = {
            username,
            firstname,
            lastname,
            email,
            password,
        }
        console.log("registerInfo");
        console.log(registerInfo);
        props.registerUser(registerInfo);
    }

    return (
        <form className="register-form animate__animated animate__fadeInUp animate__delay-3s" onSubmit={onSubmit}>
            <div className="form-names-container">
                <div className="form-div long-input">
                    <label>First:</label>
                    <input id="firstname-submit" type="text" value={firstname} onChange={onChangeFirstname} />
                </div>
                <div className="form-div long-input">
                    <label>Last:</label>
                    <input id="lastname-submit" type="text" value={lastname} onChange={onChangeLastname} />
                </div>
            </div>
            <div className="form-div">
                <label>Username:</label>
                <input id="username-submit" type="text" value={username} onChange={onChangeUsername} />
            </div>
            <div className="form-div">
                <label>Email:</label>
                <input id="email-submit" type="text" value={email} onChange={onChangeEmail} />
            </div>
            <div className="form-div">
                <label>Password:</label>
                <input id="password-submit" type="text" value={password} onChange={onChangePassword} />
            </div>
            <div className="form-div-button">
                <button className="register-button" href="#">Register</button>
            </div>
        </form>
    );
}

export default RegisterForm;
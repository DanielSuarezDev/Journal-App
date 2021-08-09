import React from "react";
import Google from "../../assets/icons/Google.svg";
import Logo from "../../assets/icons/Logo.svg";
import Home from "../../assets/images/HomeSmall.png";
import { Link } from "react-router-dom";
import {useForm} from '../../hooks/useForm'
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword,startGoogleLogin } from "../../actions/auth";

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.ui);
  console.log(loading)

  const [formValues, handleInputChange] = useForm({
    email: 'daniel@gmail.com',
    password: '12345678'
  });

  const {email, password} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password))
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="container">
        <div className="hero">
          <figure>
            <img src={Home} alt="" />
          </figure>
          <p>
            Cientos de clientes utilizan esta herramienta totalmente gratuita y
            facil de usar.
          </p>
        </div>
        <div className="container-form">
          <h3>Login</h3>

          <form onSubmit={handleLogin} className="form">
            <input
             type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              />

            <input
             type="password" 
             placeholder="Password" 
             name="password" 
             value={password}
             onChange={handleInputChange}
             />

            <button
             type="submit"
             disabled={loading}
             >Login</button>

            <Link to="/auth/register" className="singup">
              Don’t have an account?
              <strong>Sign up</strong>
            </Link>

            <div className="sign-google" onClick={handleGoogleLogin}>
                          
              <figure>
                <img className="google-icon" src={Google} alt="google button" />
              </figure>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

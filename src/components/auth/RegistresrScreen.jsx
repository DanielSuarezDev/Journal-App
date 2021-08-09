import React from "react";
import Logo from "../../assets/icons/Logo.svg";
import Home from "../../assets/images/HomeSmall.png";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError } from "../../actions/ui";
import { starRegisterEmail } from "../../actions/auth";
import Swal from 'sweetalert2';
export const RegistresrScreen = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.ui.msgError);

  const [formValues, handleInputChange] = useForm({
    name: "daniel",
    email: "daniel@gmail.com",
    password: "12345678",
    password2: "12345678",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValue()) {
      dispatch(starRegisterEmail(email, password, name));
    }
  };

  const isFormValue = () => {
    if (name.trim().length === 0) {
      dispatch(setError("necesita name"));
      Swal.fire('Error','El nombre es obligatorio', 'error')
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email no value"));
      Swal.fire('Error','Correo Invalido', 'error')
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("contraseña incorrecta"));
      Swal.fire('Error','La contraseña es incorrecta o no son iguales', 'error')
      return false;
    }
    dispatch(removeError(""));
    return true;
  };

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
          <h3>Register</h3>

          <form onSubmit={handleRegister} className="form">
            {/* <div className="auth__alert-error">{state}</div> */}
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Email"
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
            <input
              type="password"
              placeholder="Password confirm"
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />

            <button type="submit">Login</button>

            <Link to="/auth/login" className="singup">
              You have an account?
              <strong>Sign in</strong>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

import React, { useState, useEffect, useCallback } from "react";
import "../../assets/styles/components/Login.css";
import { useInitFbSDK } from "../../hooks/fb-hooks";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ScrollAnimation from "react-animate-on-scroll";
import { Spinner } from "reactstrap";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import ContinueWithFacebook from "./ContinueWithFacebook";

const validateFields = values => {
 
    const errors = {};
  
    if (!values.email) {
      errors.email = "Email requerido";
    }
  
    if (!values.password) {
      errors.password = "Contraseña requerida";
    } else if (values.password.length < 3) {
      errors.password = "Length must be greater than 3";
    }
  
    return errors;
  }
  
  const initialValues = {
    email: "",
    password: ""
  }

const Register = () => {
    const { isLoginLoading, hasLoginError, continueWithFacebook, register, isLogged } = useUser();
    const [fbUserAccessToken, setFbUserAccessToken] = useState();
    const isFbSDKInitialized = useInitFbSDK();
    const navigate = useNavigate();

      

    const handleSubmit = (user) => {
        register(user)
    }





  return (
    <div className="MainLoginPage">
      <div className="container">
      <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
          </ScrollAnimation>
        <div className="row">
          <div className="login-left-col col-3 animate__animated animate__fadeInRight">
            <div className="loginImage">
            <img src="https://notecopies.app/wp-content/uploads/2022/07/fondo-izq.png" width="347.5" height="865.5" alt="Image" loading="lazy"/>
            </div>
          </div>
       
          <div className="formColum col-6">
            <div className="LoginForm">
              <div className="LogoLogin">
              <img src="https://notecopies.app/wp-content/uploads/2021/03/notecopies-blanco.gif" width="750" height="125.5" alt="Image" loading="lazy"/>
              </div>
              <ContinueWithFacebook/>
                <Formik
                        initialValues={initialValues}
                        validate={validateFields}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, isSubmitting }) => (
                    <Form className="">
                <div className="row mainInputs">
                  <div className="col-12 loginInputs">
                  <Field
              className={errors.email ? 'error' : ''}
              name="email"
              placeholder="Email"
            />
            <ErrorMessage className='form-error' name='email' component='small' />
                 
                  </div>
                  <div className="col-12 loginInputs">
                  <Field
              className={errors.password ? 'error' : ''}
              name="password"
              placeholder="Contraseña"
              type='password'
            />
            <ErrorMessage className='form-error' name='password' component='small' />
                  </div>
                </div>
                            
                <div className="col-12 LoginButton">
                  <button type="submit">{isSubmitting ? <div className="LoginSpiner"><Spinner/></div> : " Registrarse" }</button>
                </div>
              </Form>
                )}
                </Formik>
            </div>
            <div className="LoginEror">
              <div className="register_account_redirect">
              <p>¿Ya tienes una cuenta?
                  <NavLink
                    to="/"
                    className="register_button"
                  >
                iniciar sessión
                </NavLink></p>
              </div>
  
              <p className="LoginText">Llévate a tu equipo de Marketing en el bolsillo.</p>

              <button className="buttonPlaystore">
              <div className="row">
              <div className="col-4 playstoreImg">
               <img src="https://notecopies.app/wp-content/uploads/2022/05/google-play.png"  alt="Image" loading="lazy"/>
               </div>
               <div className="col-8 PlaysotreText">
                Disponible en <br/>
                <strong>Google Play</strong>
               </div>
              </div>
              </button>
            </div>
          </div>
          <div className="login-right-col col-3 animate__animated animate__fadeInLeft">
          <div className="loginImage">
          <img src="https://notecopies.app/wp-content/uploads/2022/07/fondo-dch.png" width="377" height="778" alt="Image" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

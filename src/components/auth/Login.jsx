import React, { useState, useEffect, useCallback } from "react";
import { useInitFbSDK } from "../../hooks/fb-hooks";
import "../../assets/styles/components/Login.css";
import useUser from "../../hooks/useUser";
import { useNavigate} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Spinner } from "reactstrap";
import { NavLink } from "react-router-dom";
import ContinueWithFacebook from "./ContinueWithFacebook";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
  const [fbUserAccessToken, setFbUserAccessToken] = useState();
  const isFbSDKInitialized = useInitFbSDK();
  const navigate = useNavigate();

 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ user: { email, password } });
  };

    // Logs in a Facebook user
    const logInToFB = useCallback(() => {
      window.FB.login((response) => {
        setFbUserAccessToken(response.authResponse.accessToken);
      });
    }, []);

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
          {isLoginLoading}
          <div className="formColum col-6">
            <div className="LoginForm">
              <div className="LogoLogin">
              <img src="https://notecopies.app/wp-content/uploads/2021/03/notecopies-blanco.gif" width="750" height="125.5" alt="Image" loading="lazy"/>
              </div>
              <ContinueWithFacebook/> 
              <form onSubmit={handleSubmit}>
                <div className="row mainInputs">
                  <div className="col-12 loginInputs">
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12 loginInputs">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="col-12 LoginButton">
                  <button type="submit">{isLoginLoading ? <div className="LoginSpiner"><Spinner/></div> : "Iniciar sessión" }</button>
                </div>
              </form>
            </div>
            <div className="LoginEror">
              <div className="register_account_redirect">
              <p>¿No estás registrado/a?
                  <NavLink
                    to="/register"
                    className="register_button"
                  >
                Regístrate aquí
                </NavLink></p>
              </div>
              <h4>  
                {hasLoginError && "Usuario o contraseña invalidos"}
              </h4>

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

export default Login;

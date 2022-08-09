import React, { useState, useEffect } from "react";
import "../../assets/styles/components/Login.css";
import useUser from "../../hooks/useUser";
import { Navigate } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Spinner } from "reactstrap";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      return <Navigate to="/" replace />;
    }
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ user: { username, password } });
  };

  return (
    <div className="MainLoginPage">
      <div className="container">
      <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="fadeOut"
            duration={0.5}
            delay={0}
          >
          dsfdggfdsdfggfdsdfb
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
              <form onSubmit={handleSubmit}>
                <div className="row mainInputs">
                  <div className="col-12 loginInputs">
                    <input
                      type="username"
                      name="username"
                      placeholder="username"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
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
                  <button type="submit">Iniciar sessión</button>
                </div>
              </form>
            </div>
            <div className="LoginEror">
              <h4>
                {isLoginLoading && <div className="LoginSpiner"><Spinner/></div> }
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

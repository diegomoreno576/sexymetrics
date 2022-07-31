import React, { useState, useEffect } from "react";
import '../../assets/styles/components/Login.css';
import DarkMode from "../DarkMode";
import useUser from "../../hooks/useUser";
import { Navigate } from "react-router-dom";

const Login = () => {
 
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const {isLoginLoading, hasLoginError, login, isLogged } = useUser()


  useEffect(() => {
    if(isLogged){
      return <Navigate to="/"  replace />;
    }
  }, [isLogged])


 const handleSubmit = (e) => {
    e.preventDefault();
    login({email, password})
  }

    return (
      
      <div className="MainLoginPage">
       
    
        <div className="container">
         <div className="DakmodeLoginDisable">
         <DarkMode/>
         </div>
         <div className="row">
         <div className="col-6">
           <div className="loginImage">
             <img src="https://sexymetrics.com/wp-content/uploads/2022/05/DESKTOP_LOGIN2.png" alt=""/>
           </div>
   
        </div>
        <div className="col-6">
      <div className="LoginForm">



      <form onSubmit={handleSubmit}>
         <div className="row">
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
           onChange={(e) => setpassword (e.target.value)}
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
       {isLoginLoading &&  <strong>Chequeando credenciales</strong>}
        {hasLoginError && "Usuario o contraseña invalidos"}
        </h4>
       </div>
     </div>
         </div>
   </div>
   </div>
 )

}

export default Login




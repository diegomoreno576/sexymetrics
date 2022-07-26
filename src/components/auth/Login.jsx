import React, { useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../../context";
import { setIslogin } from "../../actions";
import { setLoginError } from "../../actions";
import { setBlog_id } from "../../actions";
import '../../assets/styles/components/Login.css';
import Spinner from "../Spinner";
import DarkMode from "../DarkMode";


const Login = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleChangeEmail = (event) => {
    setemail(event.target.value)
  }
  const handleChangePassword = (event) => {
    setpassword(event.target.value)
  }

 const handleSubmit = (event) => {

    axios
      .post(
        "https://notecopies.herokuapp.com/api/v1/sessions",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log(response)
        if(response.data.logged_in){
          dispatch(setBlog_id(response.data.blog)); 
          dispatch(setIslogin(response.data.logged_in)); 
        }else{
          dispatch(setLoginError(response.data.status));
        }
        
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }
  if(state.Loading == true){
    return <Spinner/>
  }else{
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
           placeholder="Email"
           value={email}
           onChange={handleChangeEmail}
           required
         />
           </div>
           <div className="col-12 loginInputs">
           <input
           type="password"
           name="password"
           placeholder="Password"
           value={password}
           onChange={handleChangePassword}
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
       <h4>{state.loginError == 401 ? "Usuario o contraseña invalidos": ""}</h4>
       </div>
     </div>
         </div>
   </div>
   </div>
 )
  }

}

export default Login




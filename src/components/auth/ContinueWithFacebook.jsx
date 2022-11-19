import React, { useState, useEffect, useCallback } from "react";
import { useInitFbSDK } from "../../hooks/fb-hooks";
import { Spinner } from "reactstrap";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const ContinueWithFacebook = () => {
    const { isLoginLoading, hasLoginError, continueWithFacebook, register, isLogged } = useUser();
    const [fbUserAccessToken, setFbUserAccessToken] = useState();
    const isFbSDKInitialized = useInitFbSDK();
    const navigate = useNavigate();


    useEffect(() => {
        if (fbUserAccessToken || isLogged) {
          return navigate("/");
        }
      }, [fbUserAccessToken, isLogged]);
   
        // Logs in a Facebook user
        const logInToFB = useCallback(() => {
          window.FB.login((response) => {
            setFbUserAccessToken(response.authResponse.accessToken);
            continueWithFacebook(response.authResponse.accessToken);
          });
        }, []);



  return (
    <div className="loging_with_facebook">
      <div className="login_with_facebook_button">
        <button onClick={logInToFB} className="btn fb_confirm-btn">
          {isLoginLoading ? (
            <div className="LoginSpiner">
              <Spinner />
            </div>
          ) : (
            "Continua con Facebook"
          )}{" "}
          <i class="fa-brands fa-facebook"></i>
        </button>
      </div>
    </div>
  );
};

export default ContinueWithFacebook;

import React, { useEffect, useState, useCallback } from "react";
import { useInitFbSDK } from "../../hooks/fb-hooks";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const API_BASE_URL = "https://graph.facebook.com";
const API_VERSION = "v15.0";

const Conections = () => {
  const isFbSDKInitialized = useInitFbSDK();

  // App state
  const [fbUserAccessToken, setFbUserAccessToken] = useState();
  const [fbPageAccessToken, setFbPageAccessToken] = useState();
  const [fbPageAccounts, setFbPageAccounts] = useState();
  const [connectPageModal, setConnectPageModal] = useState(false);
  const handleClose = () => setConnectPageModal(false);

  const [PAGE_ID, setPAGE_ID] = useState("");
  const [page_avatar, setPageAvatar] = useState("");
  const [page_name, setPageName] = useState("");
  const [fbData, setfbData] = useState([]);
  // Logs in a Facebook user
  const logInToFB = useCallback(() => {
    window.FB.login((response) => {
      setFbUserAccessToken(response.authResponse.accessToken);
    });
  }, []);

  // Logs out the current Facebook user
  const logOutOfFB = useCallback(() => {
    window.FB.logout(() => {
      setFbUserAccessToken(null);
      setFbPageAccessToken(null);
      setFbPageAccounts(null);
    });
  }, []);

  // // Checks if the user is logged in to Facebook
  // useEffect(() => {
  //   if (isFbSDKInitialized) {
  //     window.FB.getLoginStatus((response) => {
  //       setFbUserAccessToken(response.authResponse?.accessToken);
  //     });
  //   }
  // }, [isFbSDKInitialized]);

  // Fetches an access token for the page
  useEffect(() => {
    if (fbUserAccessToken) {
      window.FB.api(
        `/${PAGE_ID}?fields=access_token&access_token=${fbUserAccessToken}`,
        ({ access_token }) => setFbPageAccessToken(access_token)
      );

      window.FB.api(
        `me/accounts?fields=picture,access_token,name,id&access_token=${fbUserAccessToken}`,
        "GET",
        {},
        function (response) {
          console.log(response);
          setFbPageAccounts(response);
          setConnectPageModal(true);
        }
      );
    }
  }, [fbUserAccessToken]);

  useEffect(() => {
    if (PAGE_ID) {
      fetch(
        `${API_BASE_URL}/${API_VERSION}/${PAGE_ID}/insights/page_fans,page_fan_adds_unique,page_fan_removes_unique,page_impressions_unique,page_total_actions?access_token=${fbPageAccessToken}`
      )
        .then((response) => response.json())
        .then((data) => {
          setfbData(data); // ⬅️ Guardar datos
        });
    }
  }, [PAGE_ID]);

  console.log(fbData);

  // let likesPage = fbData?.data?.[0].values?.[0].value;
  // let likesPageAdd = fbData?.data?.[3].values?.[0].value;
  // let likesPageRemove = fbData?.data?.[6].values?.[0].value;
  // let likesPageImpressions = fbData?.data?.[9].values?.[0].value;
  // let likesPageTotalActions = fbData?.data?.[12].values?.[0].value;

  function handleAddClick(PAGE_ID, PAGE_TOKEN, PAGE_IMG, PAGE_NAME) {
    setPAGE_ID(PAGE_ID);
    setFbPageAccessToken(PAGE_TOKEN);
    setPageAvatar(PAGE_IMG);
    setPageName(PAGE_NAME);
    setConnectPageModal(false);
  }

  return (
    <div className="main_setting container">
      <div className="setting_name">
        <h3>Conexiones</h3>
      </div>
      <div className="setting_dashboard">
        <div className="counts_items col-3">
          <div className="h3">
            <h4>
              <i class="facebook_icon fa-brands fa-facebook"></i> Facebook
            </h4>
          </div>
          <div className="setting_dashboard__item">
            <div id="facebook_conntection">
              {fbUserAccessToken ? (
                <div>
                  <div className="account_conected">
                    <div className="mainAccount_connected">

                      <div className="icon_text_acount_connected">
                        <div className="account_conected__img">
                          <img src={page_avatar} alt="" />
                        </div>
                        <div className="account_conected__name">
                          <span>Página</span>
                          <p className="conneted_page_name">{page_name}</p>
                        </div>
                      </div>

                      <div className="desconeted_acount">
                      <button onClick={logOutOfFB} className="desconnected_account">
                       x
                      </button>
                    </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={logInToFB} className="btn fb_confirm-btn">
                  Conectar Facebook <i class="fa-brands fa-facebook"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal show={connectPageModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="facebook_icon fa-brands fa-facebook"></i> Páginas de
            Facebook
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {fbPageAccounts?.data?.map((page) => {
              return (
                <div
                  className="pages_items"
                  key={page.id}
                  onClick={() =>
                    handleAddClick(
                      page.id,
                      page.access_token,
                      page.picture.data.url,
                      page.name
                    )
                  }
                >
                  <div className="pages_datos">
                    <div className="page_main_datos">
                      <div className="pages_icons">
                        <img src={page.picture.data.url} alt="" />
                      </div>

                      <div className="page_datos_name_id">
                        <div className="page_datos_name">
                          <p>{page.name}</p>
                        </div>
                        <div className="page_datos_id">
                          <p>{page.id}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="page_select">
                    <div className="select_page_button">
                      <span>Selecionar</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Conections;

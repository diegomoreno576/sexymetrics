import React, { useEffect, useState, useCallback } from "react";
import { useInitFbSDK } from "../../hooks/fb-hooks";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { APP_URL } from "../../constants";
import { useParams } from "react-router-dom";
import serviceConnectAccount from "../../services/connectAccount";
import deleteConexionService from "../../services/delete_connection";


const Conections = () => {
  const isFbSDKInitialized = useInitFbSDK();

  let { brand_id, user_id } = useParams();

  // App state
  const [fbUserAccessToken, setFbUserAccessToken] = useState();
  const [fbPageAccounts, setFbPageAccounts] = useState();
  const [connectPageModal, setConnectPageModal] = useState(false);
  const handleClose = () => setConnectPageModal(false);
  const [account_conected, setAccount_connected] = useState()

  const [connectPageModal2, setConnectPageModal2] = useState(false);
  const handleClose2 = () => setConnectPageModal2(false);

  const [connectPageModal3, setConnectPageModal3] = useState(false);
  const handleClose3 = () => setConnectPageModal3(false);

  const [page_avatar, setPageAvatar] = useState("");
  const [page_name, setPageName] = useState("");
 

  //Api connections
  const [appConnections, setAppConnections] = useState([]);
  const { facebook_connection } = appConnections;
  // Logs in a Facebook user
  const logInToFB = useCallback(() => {
    window.FB.login((response) => {
      setFbUserAccessToken(response.authResponse.accessToken);
    });
  }, []);

  // connect intagram
  function connect_instagram() {
    if (!fbUserAccessToken) {
      setConnectPageModal2(true);
    }
  }
  // connect facebook ads
  function connect_faceboooks_ads() {
    if (!fbUserAccessToken) {
      setConnectPageModal3(true);
    }
  }

  // Logs out the current Facebook user
  const logOutOfFB = useCallback(() => {
    window.FB.logout(() => {
      setFbUserAccessToken(null);
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
        `me/accounts?fields=picture,name,id&access_token=${fbUserAccessToken}`,
        "GET",
        {},
        function (response) {
          setFbPageAccounts(response);
          setConnectPageModal(true);
        }
      );
    }
  }, [fbUserAccessToken]);

  // useEffect(() => {
  //   if (PAGE_ID) {
  //     fetch(
  //       `${API_BASE_URL}/${API_VERSION}/${PAGE_ID}/insights/page_fans,page_fan_adds_unique,page_fan_removes_unique,page_impressions_unique,page_total_actions?access_token=${fbPageAccessToken}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setfbData(data); // ⬅️ Guardar datos
  //       });
  //   }
  // }, [PAGE_ID]);

  // let likesPage = fbData?.data?.[0].values?.[0].value;
  // let likesPageAdd = fbData?.data?.[3].values?.[0].value;
  // let likesPageRemove = fbData?.data?.[6].values?.[0].value;
  // let likesPageImpressions = fbData?.data?.[9].values?.[0].value;
  // let likesPageTotalActions = fbData?.data?.[12].values?.[0].value;

  function desconnected_account() {
    deleteConexionService(appConnections.facebook_connection.id)
    .then((response) => {
      setAccount_connected(false)
    }
    )
    .catch((error) => {
      console.log(error);
    }
    );
  }

  function handleAddClick(PAGE_ID, PAGE_IMG, PAGE_NAME) {
    const type = "Facebook"
    const page_type = "pagina"
    let user_token = fbUserAccessToken
    serviceConnectAccount(
      brand_id,
      user_id, 
      type, 
      PAGE_NAME, 
      PAGE_IMG, 
      PAGE_ID, 
      page_type,
      user_token)
    .then((response) => {
      console.log(response);
      setAccount_connected(true)
      setConnectPageModal(false)
    }
    )
    .catch((error) => {
      console.log(error);
    }
     );
    // setPAGE_ID(PAGE_ID);
    // setFbPageAccessToken(PAGE_TOKEN);
    // setPageAvatar(PAGE_IMG);
    // setPageName(PAGE_NAME);
    // setConnectPageModal(false);
  }

  useEffect(() => {
    fetch(`${APP_URL}/api/v1/brand_connetions?id=${brand_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage.getItem("jwt"),
      },
    })
      .then((response) => response.json())
      .then((data) => setAppConnections(data))
      .catch((error) => console.log(error.message));
  }, [account_conected, brand_id]);
  
  console.log(appConnections.facebook_connection)
  return (
    <div className="main_setting container">
      <div className="setting_name">
        <h3>Conecta tu cuenta para ver las metricas de cada una de ellas</h3>
      </div>

      <div className="setting_dashboard row">
        <div className="counts_items col-4">
          <div className="h3">
            <h4>
              <i class="facebook_icon fa-brands fa-facebook"></i> Facebook
            </h4>
          </div>
          <div className="setting_dashboard__item">
            <div id="account_conntection">
              {appConnections.facebook_connection == null ? (
              <button onClick={logInToFB} className="btn fb_confirm-btn">
                Conectar Facebook <i class="fa-brands fa-facebook"></i>
              </button>

              ) : (
                <div>
                  <div className="account_conected">
                    <div className="mainAccount_connected">
                      <div className="icon_text_acount_connected">
                        <div className="account_conected__img">
                          <img src={facebook_connection.picture_url} alt="" />
                        </div>
                        <div className="account_conected__name">
                          <span>Página</span>
                          <p className="conneted_page_name">{facebook_connection.name}</p>
                        </div>
                      </div>

                      <div className="desconeted_acount">
                        <button
                          onClick={() => desconnected_account()}
                          className="desconnected_account"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
              <div className="row">desconnected_account
                {fbPageAccounts?.data?.map((page) => {
                  return (
                    <div
                      className="pages_items"
                      key={page.id}
                      onClick={() =>
                        handleAddClick(
                          page.id,
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
        {/* instagram */}
        <div className="counts_items col-4">
          <div className="h3">
            <h4>
              <i class="instagram_icon fa-brands fa-instagram"></i> Instagram
            </h4>
          </div>
          <div className="setting_dashboard__item">
            <div id="account_conntection">
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
                        <button
                          onClick={logOutOfFB}
                          className="desconnected_account"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={connect_instagram}
                  className="btn ig_confirm-btn"
                >
                  Conectar cuenta profesional{" "}
                  <i class="fa-brands fa-instagram"></i>
                </button>
              )}
            </div>
          </div>
          <Modal show={connectPageModal2} onHide={handleClose2}>
            <Modal.Body>
              <div className="msg">
                <h3>Conexión con Instagram</h3>
                <p>
                  Primero, necesitas conectar una página de Facebook a Metricool
                  para conectar Instagram. Por favor, verifica que:
                </p>
                <p>
                  1. Tu cuenta de Instagram es profesional (negocio o creador).
                </p>
                <p>
                  2. La cuenta de Instagram está correctamente vinculada a una
                  página de Facebook.
                </p>
                <p>
                  Cuando hagas clic en Continuar, serás dirigido a Facebook,
                  donde puedes otorgarnos permisos para acceder a tu cuenta
                  profesional de Instagram.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={logInToFB}>
                Continuar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Facebooks ads */}
        <div className="counts_items col-4">
          <div className="h3">
            <h4>
              <i class="facebook_icon fa-light fa-bullhorn"></i> Facebook ads
            </h4>
          </div>
          <div className="setting_dashboard__item">
            <div id="account_conntection">
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
                        <button
                          onClick={logOutOfFB}
                          className="desconnected_account"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={connect_faceboooks_ads}
                  className="btn fb_confirm-btn"
                >
                  Conectar cuenta <i class="fa-light fa-bullhorn"></i>
                </button>
              )}
            </div>
          </div>
          <Modal show={connectPageModal3} onHide={handleClose3}>
            <Modal.Body>
              <div className="msg">
                <h3>Conexión con Facebook Ads</h3>
                <p>
                  Necesitas conectar una página de Facebook a Metricool para
                  poder crear campañas de Facebook Ads. Por favor, verifica que
                  tienes una página conectada
                </p>
                <p>
                  Cuando hagas clic en Continuar, serás dirigido a Facebook,
                  donde puedes conectar tu cuenta de Facebook Ads.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={logInToFB}>
                Continuar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Conections;

//Decor id (PAGE_BUSSINES_ID)

//datos de la pagina
//17841408453420473?fields=followers_count, follows_count, media_count, name, profile_picture_url, username, website,biography

//Datod de la seccion alcance
//Impresiones, alcances, visitas al perfil 17841408453420473/insights?metric=impressions,reach,profile_views&period=day&since=2021-01-01&until=2021-01-31

//obtner el id de cada media del ig(PAGE_BUSSINES_ID)
//17841408453420473/media

//metricas segun el id de la publicacion (ID_DE_LA_PUBLICACION)
//18040178314384330?fields=media_url,like_count,id,comments_count,permalink,timestamp,media_product_type

//metricas segun el id de la publicacion (ID_DE_LA_PUBLICACION) insight (carousel album)
//18040178314384330/insights?metric=carousel_album_engagement,carousel_album_impressions,carousel_album_reach,carousel_album_saved,carousel_album_video_views

//metricas segun el id de la publicacion (ID_DE_LA_PUBLICACION) insight (fotos y videos)
//18040178314384330/insights?metric=engagement,impressions,reach,saved,video_views

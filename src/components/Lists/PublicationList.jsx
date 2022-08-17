import React from "react";
import "../../assets/styles/components/PublicationList.css";


const PublicationList = (props) => {

  return (
    <div className="CardItem">
      <div className="itemimg">
        <a className="" href={props.link}>
          <img className="CardImg" src={props.picture} />
        </a>
      </div>
      <div className="mainfbPostTime">
        <div className="fbPostTime">
          <div className="childfbPostTime">{props.fecha}</div>
        </div>
      </div>
      <div className="itemtext">
      <table className="listapublucaciontable">

<tbody><tr className="itemtable">

    <td className="childitemtable"><p className="numberfbpublicacion">{props.Likes}<i className="iconosI megustaI fa-solid fa-heart"></i></p><br/>Likes</td>

    <td className="childitemtable"><p className="numberfbpublicacion">{props.Likes}<i className="iconosI comentariosI fa-solid fa-message-lines"></i></p><br/>Comentarios</td>

    <td className="childitemtable"><p className="numberfbpublicacion">{props.Likes}<i className="iconosI clicksI fa-solid fa-arrow-pointer"></i></p><br/>Clicks</td>
    
    <td className="childitemtable"><p className="numberfbpublicacion">{props.linkclicks}<i className="iconosI linksI fa-solid fa-link"></i></p><br/>Links</td>

</tr>

<tr className="itemtable">

    <td className="childitemtable"><p className="numberfbpublicacion">{props.Likes}</p><br/>Impresiones</td>

    <td className="childitemtable"><p className="numberfbpublicacion">{props.Likes}</p><br/>Alcance</td>

    <td className="childitemtable"><p className="numberfbpublicacion">{props.reproducciones}</p><br/>Reproducciones</td>
    
    <td className="childitemtable"><p className="numberfbpublicacion">{props.puntos}</p><br/>Puntos</td>

</tr>

</tbody></table>
      </div>
      <div className="ContectText">
        
        <p>{
        !props.text.length > 160 ? props.text.substr(0, 160) + '...' : props.text
        }  
        </p>
      </div>
    </div>
  );
};

export default PublicationList;


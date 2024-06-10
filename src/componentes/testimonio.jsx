import React from "react";
import "../hojas-de-estilo/testimonio.css";


function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require(`../imagenes/${props.imagen}.png`)} alt="Imagen testimonio" />
            <div className="contenedor-texto-principal">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="puesto-testimonio"><strong>{props.puesto}</strong> en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">{props.texto}</p>
            </div>
        </div>
    );
}

export default Testimonio;

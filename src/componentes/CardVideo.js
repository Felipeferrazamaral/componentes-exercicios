import React from "react";

const titulo = "Título do vídeo";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo({newObj}) {
  return (
    <div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={newObj.imagem} alt="" />
        <h4>{newObj.titulo}</h4>
        <p>{newObj.usuario}</p>
      </div>
    </div>
  );
}

export default CardVideo
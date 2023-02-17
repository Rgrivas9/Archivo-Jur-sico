import { useRef } from "react";
import "./dinoFigure.css";

const DinoFigure = ({ dino }) => {
  const audio = useRef();
  const imagen = useRef();
  return (
    <figure className="dinoFigure">
      <img
        src={dino.media.fosil}
        alt={`${dino.nombre} fósil`}
        className="fosilImg"
      />
      <div className="nombre">
        <h2>{dino.nombre}</h2>
        <ul className="ulNombre">
          <li>Orden: {dino.orden}.</li>
          <li>Dieta: {dino.dieta}.</li>
          <li>
            Longitud: {dino.longitud}m Peso: {dino.peso}kg
          </li>
          <li>Periodo: {dino.periodo}.</li>
          <li>Ubicación: {dino.ubicacion}.</li>
          <li>Significado del nombre: {dino.significado}.</li>
        </ul>
      </div>
      <div className="botones">
        <button
          onClick={() => {
            audio.current.play();
          }}
          className="ruidoBtn"
        >
          Sound Effect 🔊
        </button>
        <button
          onClick={() => {
            imagen.current.classList.toggle("hidden");
          }}
          className="fotoBtn"
        >
          Paleoart
        </button>
      </div>
      <div
        className="hidden paleoart"
        ref={imagen}
        onClick={() => {
          imagen.current.classList.add("hidden");
        }}
      >
        <img src={dino.media.paleoart} alt={`${dino.nombre} paleoart`} />
      </div>
      <audio src={dino.media.sonido} ref={audio}></audio>
    </figure>
  );
};
export default DinoFigure;

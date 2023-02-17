import { useRef } from "react";
import './dinoFigure.css'

const DinoFigure = ({ dino }) => {
  const audio = useRef();
  const imagen = useRef();
  return (
    <figure className="dinoFigure">
      <img src={dino.media.fosil} alt={`${dino.nombre} fósil`} className='fosilImg'/>
      <div className="nombre">
        <h2>{dino.nombre}</h2>
        <ul className="ulNombre">
          <li>{dino.orden}</li>
          <li>{dino.dieta}</li>
          <li>
            {dino.longitud}m {dino.peso}kg
          </li>
        </ul>
      </div>
      <div className="periodo">
        <ul className="ulPeriodo">
          <li>{dino.periodo}</li>
          <li>{dino.ubicacion}</li>
          <li>{dino.significado}</li>
        </ul>
        <div className="botones">
          <button
            onClick={() => {
                audio.current.play()
            }}
            className='ruidoBtn'
          >
            ruido
          </button>
          <button
            onClick={() => {
              imagen.current.classList.toggle("hidden");
            }}
            className='fotoBtn'
          >
            foto
          </button>
        </div>
      </div>
      <div className="hidden paleoart" ref={imagen} onClick={()=>{imagen.current.classList.add('hidden')}}>
        <img src={dino.media.paleoart} alt={`${dino.nombre} paleoart`} />
      </div>
      <audio src={dino.media.sonido} ref={audio}></audio>
    </figure>
  );
};
export default DinoFigure;

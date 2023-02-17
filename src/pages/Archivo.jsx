import { useEffect, useState } from "react";
import DinoFigure from "../components/DinoFigure";
import "./archivo.css";
const Archivo = () => {
  localStorage.setItem("pageDino", "archivo");
  const [dinos, setDinos] = useState([]);
  const [filterDinos, setFilterDinos] = useState([]);
  useEffect(() => {
    fetch('https://63ee3a9bd466e0c18babfb1c.mockapi.io/dinosaurs')
      .then((res) => res.json())
      .then((res) => {
        setDinos(res);
        setFilterDinos(res);
      });
  }, [dinos]);
  
  return (
    <main className="mainArchivo">
      <div className="selectArchivo"></div>
      <section className="dinosaurSection">{
        filterDinos.map((dinosaurio)=>
          <DinoFigure dino={dinosaurio} key={dinosaurio.id}></DinoFigure>
        ) 
}</section>
      
    </main>
  );
};
export default Archivo;

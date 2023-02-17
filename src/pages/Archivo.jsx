import { useContext, useEffect, useState } from "react";
import DinoFigure from "../components/DinoFigure";
import { PageContext } from "../context/pageContext";
import filtrado from "../utils/filtrado";
import "./archivo.css";

const Archivo = () => {
  localStorage.setItem("pageDino", "archivo");
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("archivo");
  }, [page]);
  const [dinos, setDinos] = useState([]);
  const [filterDinos, setFilterDinos] = useState([]);
  useEffect(() => {
    fetch("https://63ee3a9bd466e0c18babfb1c.mockapi.io/dinosaurs")
      .then((res) => res.json())
      .then((res) => {
        setDinos(res);
        setFilterDinos(res);
      });
  }, []);
  const filtros = {
    periodo: "todos",
    ubicacion: "todas",
    orden: "todos",
    dieta: "todas",
    ordenado: "longitud",
    modo: 1
  };
  return (
    <main className="mainArchivo">
      <div className="selectArchivo"></div>
      <section className="dinosaurSection">
        <button onClick={()=>{setFilterDinos(filtrado(dinos,filtros))}}>filtro</button>
        {filterDinos.map((dinosaurio) => (
          <DinoFigure dino={dinosaurio} key={dinosaurio.id}></DinoFigure>
        ))}
      </section>
    </main>
  );
};
export default Archivo;

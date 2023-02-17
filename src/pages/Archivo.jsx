import { useContext, useEffect, useState } from "react";
import DinoFigure from "../components/DinoFigure";
import { PageContext } from "../context/pageContext";
import filtrado from "../utils/filtrado";
import ordenar from "../utils/ordenar";
import unicos from "../utils/unicos";
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
        setDinos(ordenar(res, "nombre", 0));
        setFilterDinos(ordenar(res, "nombre", 0));
      });
  }, []);
  const [filtros, setFiltros] = useState({
    periodo: "todos",
    ubicacion: "todas",
    orden: "todos",
    dieta: "todas",
    ordenado: "nombre",
    modo: 0,
  });
  return (
    <main className="mainArchivo">
      <div className="selectArchivo">
        <input type="text" />
        <select
          name="periodo"
          id="periodo"
          onChange={(ev) => {
            setFiltros({ ...filtros, periodo: ev.currentTarget.value });
            const updatedFiltros = {
              ...filtros,
              periodo: ev.currentTarget.value,
            };
            setFilterDinos(filtrado(dinos, updatedFiltros));
          }}
        >
          <option value="todos">todos</option>
          {unicos(filterDinos, "periodo").map((filtro) => (
            <option value={filtro} key={filtro}>
              {filtro}
            </option>
          ))}
        </select>
        <select
          name="ubicacion"
          id="ubicacion"
          onChange={(ev) => {
            setFiltros({ ...filtros, ubicacion: ev.currentTarget.value });
            const updatedFiltros = {
              ...filtros,
              ubicacion: ev.currentTarget.value,
            };
            setFilterDinos(filtrado(dinos, updatedFiltros));
          }}
        >
          <option value="todas">todas</option>
          {unicos(filterDinos, "ubicacion").map((filtro) => (
            <option value={filtro} key={filtro}>
              {filtro}
            </option>
          ))}
        </select>
        <select
          name="orden"
          id="orden"
          onChange={(ev) => {
            setFiltros({ ...filtros, orden: ev.currentTarget.value });
            const updatedFiltros = {
              ...filtros,
              orden: ev.currentTarget.value,
            };
            setFilterDinos(filtrado(dinos, updatedFiltros));
          }}
        >
          <option value="todos">todos</option>
          {unicos(filterDinos, "orden").map((filtro) => (
            <option value={filtro} key={filtro}>
              {filtro}
            </option>
          ))}
        </select>
        <select
          name="dieta"
          id="dieta"
          onChange={(ev) => {
            setFiltros({ ...filtros, dieta: ev.currentTarget.value });
            const updatedFiltros = {
              ...filtros,
              dieta: ev.currentTarget.value,
            };
            setFilterDinos(filtrado(dinos, updatedFiltros));
          }}
        >
          <option value="todas">todas</option>
          {unicos(filterDinos, "dieta").map((filtro) => (
            <option value={filtro} key={filtro}>
              {filtro}
            </option>
          ))}
        </select>
        <select
          name="ordenado"
          id="ordenado"
          onChange={(ev) => {
            setFiltros({
              ...filtros,
              ordenado: ev.currentTarget.value.slice(
                0,
                ev.currentTarget.value.length - 1
              ),
              modo: ev.currentTarget.value.slice(
                ev.currentTarget.value.length - 1
              ),
            });
            const updatedFiltros = {
              ...filtros,
              ordenado: ev.currentTarget.value.slice(
                0,
                ev.currentTarget.value.length - 1
              ),
              modo: ev.currentTarget.value.slice(
                ev.currentTarget.value.length - 1
              ),
            };
            setFilterDinos(filtrado(dinos, updatedFiltros));
          }}
        >
          <option value="nombre0">nombre</option>
          <option value="longitud1">mayor longitud</option>
          <option value="longitud0">menor longitud</option>
          <option value="peso1">mayor peso</option>
          <option value="peso0">menor peso</option>
        </select>
      </div>
      <section className="dinosaurSection">
        <button
          onClick={() => {
            setFilterDinos(filtrado(dinos, filtros));
          }}
        >
          filtro
        </button>
        {filterDinos.map((dinosaurio) => (
          <DinoFigure dino={dinosaurio} key={dinosaurio.id}></DinoFigure>
        ))}
      </section>
    </main>
  );
};
export default Archivo;

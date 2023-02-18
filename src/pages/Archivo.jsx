import { useContext, useEffect, useRef, useState } from "react";
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
        mrAdn.current.classList.add('hidden')
        dinoSection.current.classList.remove('hidden')
      });
  }, []);
  const [filtros, setFiltros] = useState({
    periodo: "todos",
    ubicacion: "todas",
    orden: "todos",
    dieta: "todas",
    ordenado: "nombre",
    modo: 0,
    input: "",
  });
  const [filtrosReset] = useState({
    periodo: "todos",
    ubicacion: "todas",
    orden: "todos",
    dieta: "todas",
    ordenado: "nombre",
    modo: 0,
    input: "",
  });
  const inputFiltro = useRef();
  const peridoSelect = useRef();
  const ubicacionSelect = useRef();
  const ordenSelect = useRef();
  const dietaSelect = useRef();
  const ordenadoSelect = useRef();
  const filtrosDiv = useRef();
  const dinoSection = useRef();
  const buttonShowFilters = useRef();
  const buttonHideFilters = useRef();
  const mrAdn = useRef()
  return (
    <main className="mainArchivo">
      <div className="filtrosBtn" ref={buttonShowFilters}>
        <button
          onClick={() => {
            buttonShowFilters.current.classList.add("noHeight");
            filtrosDiv.current.classList.remove("noHeight");
            dinoSection.current.classList.remove("sectionWithoutSelectNav");
            buttonHideFilters.current.classList.remove("hidden");
          }}
        >
          filtros
          <img
            src="https://res.cloudinary.com/di0zpa5yw/image/upload/v1676711474/dinos/flecha-hacia-abajo_cqsgol.png"
            alt="flecha arriba"
          />
        </button>
      </div>
      <div className="selectArchivo noHeight" ref={filtrosDiv}>
        <input
          type="text"
          placeholder="Buscar por nombre"
          onChange={(ev) => {
            setFiltros({ ...filtros, input: ev.currentTarget.value });
            const updatedFiltros = {
              ...filtros,
              input: ev.currentTarget.value,
            };
            setFilterDinos(filtrado(dinos, updatedFiltros));
          }}
          ref={inputFiltro}
        />
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
          ref={peridoSelect}
        >
          <option value="todos">Periodo</option>
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
          ref={ubicacionSelect}
        >
          <option value="todas">Ubicación</option>
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
          ref={ordenSelect}
        >
          <option value="todos">Orden</option>
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
          ref={dietaSelect}
        >
          <option value="todas">Dieta</option>
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
          ref={ordenadoSelect}
        >
          <option value="nombre0">Orden alfabético</option>
          <option value="longitud1">mayor longitud</option>
          <option value="longitud0">menor longitud</option>
          <option value="peso1">mayor peso</option>
          <option value="peso0">menor peso</option>
        </select>
        <button
          onClick={() => {
            setFiltros({ ...filtrosReset });
            const updatedFiltros = { ...filtrosReset };
            setFilterDinos(filtrado(dinos, updatedFiltros));
            inputFiltro.current.value = "";
            peridoSelect.current.value = "todos";
            ordenSelect.current.value = "todos";
            dietaSelect.current.value = "todas";
            ordenadoSelect.current.value = "nombre0";
            ubicacionSelect.current.value = "todas";
          }}
        >
          Restablecer filtros
        </button>
        <button
          className="buttonHide hidden"
          ref={buttonHideFilters}
          onClick={() => {
            filtrosDiv.current.classList.add("noHeight");
            dinoSection.current.classList.add("sectionWithoutSelectNav");
            buttonShowFilters.current.classList.remove("noHeight");
            buttonHideFilters.current.classList.add("hidden");
          }}
        >
          <img
            src="https://res.cloudinary.com/di0zpa5yw/image/upload/v1676711474/dinos/flecha-hacia-abajo_cqsgol.png"
            alt="flecha arriba"
          />
        </button>
      </div>
          <div className="MrAdn" ref={mrAdn}><h2>Cargando...</h2></div>
      <section
        className="dinosaurSection sectionWithoutSelectNav hidden"
        ref={dinoSection}
      >
        {filterDinos.map((dinosaurio) => (
          <DinoFigure dino={dinosaurio} key={dinosaurio.id}></DinoFigure>
        ))}
      </section>
    </main>
  );
};
export default Archivo;

import { PageContext } from "../context/pageContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const HeaderPages = () => {
  const { page, setPage } = useContext(PageContext);
  const navigate = useNavigate();
  return (
    <header>
      <button
        onClick={() => {
          setPage("home");
          navigate("/");
        }}
      >
        Volver
      </button>
      {page == "archivo" ? <h1>Archivo</h1> : <h1>Mapa</h1>}
      {page == "archivo" ? (
        <button
          onClick={() => {
            setPage("mapa");
            navigate("/mapa");
          }}
        >
          Mapa
        </button>
      ) : (
        <button
          onClick={() => {
            setPage("archivo");
            navigate("/archivo");
          }}
        >
          Archivo
        </button>
      )}
    </header>
  );
};
export default HeaderPages;

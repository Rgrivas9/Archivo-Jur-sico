import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../context/pageContext";

const Home = () => {
  localStorage.setItem("pageDino", "home");
  const { setPage } = useContext(PageContext);
  const navigate = useNavigate();
  return (
    <main>
      <h1>home</h1>
      <button
        onClick={() => {
          setPage("mapa");
          navigate("/mapa");
        }}
      >
        Mapa
      </button>
      <button
        onClick={() => {
          setPage("archivo");
          navigate("/archivo");
        }}
      >
        Archivo
      </button>
    </main>
  );
};
export default Home;

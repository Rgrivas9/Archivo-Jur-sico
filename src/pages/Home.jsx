import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../context/pageContext";
import './home.css'

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
        className='mapBtn'
      >
        Mapa
      </button>
      <button
        onClick={() => {
          setPage("archivo");
          navigate("/archivo");
        }}
        className='dinosaurBtn'
      >
        Archivo
      </button>
    </main>
  );
};
export default Home;

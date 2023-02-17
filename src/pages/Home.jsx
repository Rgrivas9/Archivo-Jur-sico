import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../context/pageContext";
import "./home.css";

const Home = () => {
  localStorage.setItem("pageDino", "home");
  const { setPage } = useContext(PageContext);
  const navigate = useNavigate();
  return (
    <main className="mainHome">
      <div className="btnDiv">
        <h4>Mapa</h4>
        <button
          onClick={() => {
            setPage("mapa");
            navigate("/mapa");
          }}
          className="mapBtn"
        ></button>
      </div>
      <div className="btnDiv">
        <h4>Archivo</h4>
        <button
          onClick={() => {
            setPage("archivo");
            navigate("/archivo");
          }}
          className="dinosaurBtn"
        ></button>
      </div>
    </main>
  );
};
export default Home;

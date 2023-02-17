import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useContext, useEffect} from "react";
import { PageContext } from "./context/pageContext";

import "./App.css";


function App() {
  const page = localStorage.getItem("pageDino");
  const { setPage } = useContext(PageContext);
  window.addEventListener('beforeunload',()=>{localStorage.setItem('pageDino','home')})
  useEffect(() => {
    setPage(page);
  }, [page]);
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

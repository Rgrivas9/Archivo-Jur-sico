import { PageContext } from "../context/pageContext";
import { useContext } from "react";
import HeaderPages from "./HeaderPages";
import './header.css'

const Header = () => {
  const { page} = useContext(PageContext);
  return (
      (page == "home" && <header className="header"><h1>Bienvenido al archivo jurasico</h1></header>) ||
        (page != "home" && <HeaderPages/>)
    
  );
};
export default Header;

import { PageContext } from "../context/pageContext";
import { useContext } from "react";
import HeaderPages from "./HeaderPages";

const Header = () => {
  const { page} = useContext(PageContext);
  return (
      (page == "home" && <header><h1>Bienvenido al archivo jurásico</h1></header>) ||
        (page != "home" && <HeaderPages/>)
    
  );
};
export default Header;

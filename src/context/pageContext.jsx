import { createContext, useState } from "react";
export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState(() => {
    if (localStorage.getItem("pageDino")) {
      return localStorage.getItem("pageDino");
    } else {
      return "home";
    }
  });
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
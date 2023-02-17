import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Archivo from "./pages/Archivo";
import Mapa from "./pages/Mapa";
import Home from "./pages/Home";
import { PageContextProvider } from "./context/pageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageContextProvider>
    <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/archivo" element={<Archivo />} />
            <Route path="/mapa" element={<Mapa />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </PageContextProvider>
  </React.StrictMode>
);

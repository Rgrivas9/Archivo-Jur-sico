import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./mapa.css";
import { useContext, useEffect, useState } from "react";
import DinoFigure from '../components/DinoFigure'
import { PageContext } from "../context/pageContext";
const center = [38, -10];
const getIcon = (url) => {
  const icon = new L.icon({
    iconUrl: url,
  });
  return icon;
};
const southWest = L.latLng(-75, -180);
const northEast = L.latLng(78, 190);
const bounds = L.latLngBounds(southWest, northEast);
const Mapa = () => {
  localStorage.setItem("pageDino", "mapa");
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("mapa");
  }, [page]);
  const [dinos, setDinos] = useState([]);
  useEffect(() => {
    fetch("https://63ee3a9bd466e0c18babfb1c.mockapi.io/dinosaurs")
      .then((res) => res.json())
      .then((res) => {
        setDinos(res);
      });
  }, []);
  return (
    <main className="mainMapa">
      <MapContainer
        center={center}
        zoom={4}
        style={{ width: "100vw", height: "calc(100vh - 80px)" }}
        maxZoom={6}
        minZoom={2}
        maxBounds={bounds}
      >
        <TileLayer
          url="https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=lrkSSWlrlq0GXEsRnGOY"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        ></TileLayer>
        {dinos.map((dinosaurio) => (
          <Marker position={dinosaurio.coordenadas} icon={getIcon(dinosaurio.media.marker)} key={dinosaurio.id}>
            <Popup className="leaflet-popup">
              <DinoFigure dino={dinosaurio} className='dinoFigure'></DinoFigure>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </main>
  );
};
export default Mapa;

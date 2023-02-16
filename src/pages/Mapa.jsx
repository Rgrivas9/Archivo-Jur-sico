import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./mapa.css";

const center = [38, -25];
const position = [41, -9];
const getIcon = (iconsize) => {
  const icon = new L.icon({
    iconUrl: "../ALLOSAURUS.png",
    iconsize: iconsize,
  });
  return icon;
};

const Mapa = () => {
  localStorage.setItem("pageDino", "mapa");
  return (
    <main>
      <MapContainer
        center={center}
        zoom={4}
        style={{ width: "100vw", height: "100vh" }}
        maxZoom={6}
        minZoom={4}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/ocean/{z}/{x}/{y}.png?key=lrkSSWlrlq0GXEsRnGOY"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>'
        ></TileLayer>
        <Marker position={position} icon={getIcon([5, 5])}>
          <Popup className="leaflet-popup">
            <div className="hola">hola</div>
          </Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};
export default Mapa;

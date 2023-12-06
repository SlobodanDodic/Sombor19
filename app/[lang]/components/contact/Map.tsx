"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[45.7748510291451, 19.11884246550803]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[45.7748510291451, 19.11884246550803]} draggable={true}>
        <Popup>
          <strong>Sombor Central</strong>
          <br /> <strong>Apartment 19</strong>
          <br /> <em>Venac Živojina Mišića 19</em>
          <br /> <strong>+381 63 540 433</strong>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

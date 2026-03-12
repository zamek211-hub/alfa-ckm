"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface Point {
  lat: number;
  lng: number;
  title: string;
  image: string;
}

export default function EventMap({ points }: { points: Point[] }) {

  const icon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (

    <MapContainer
      center={[points[0].lat, points[0].lng]}
      zoom={7}
      style={{ height: "500px", width: "100%" }}
    >

      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {points.map((p, i) => (

        <Marker key={i} position={[p.lat, p.lng]} icon={icon}>

          <Popup>

            <div className="w-48">

              <img
                src={p.image}
                alt={p.title}
                className="w-full rounded mb-2"
              />

              <div className="text-sm font-semibold">
                {p.title}
              </div>

            </div>

          </Popup>

        </Marker>

      ))}

    </MapContainer>

  );

}
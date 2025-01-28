import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet"; // Import Leaflet

const SearchBar: React.FC = () => {
  const map = useMap(); // Get the map instance
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const fetchSuggestions = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`;
    const response = await fetch(url);
    const results = await response.json();
    setSuggestions(results.slice(0, 5)); 
  };

  const handleSearch = (lat: number, lon: number) => {
    const newCenter: LatLngExpression = [lat, lon];
    map.setView(newCenter, 9);
    setSuggestions([]); 
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "70px",
        zIndex: 1000,
        background: "white",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <input
        type="text"
        placeholder="Search location..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          fetchSuggestions(e.target.value);
        }}
        style={{
          padding: "5px",
          width: "200px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <ul
        style={{
          listStyle: "none",
          margin: "5px 0",
          padding: "0",
          maxHeight: "150px",
          overflowY: "auto",
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            onClick={() =>
              handleSearch(
                parseFloat(suggestion.lat),
                parseFloat(suggestion.lon)
              )
            }
            style={{
              padding: "5px",
              cursor: "pointer",
              borderBottom: "1px solid #eee",
            }}
          >
            {suggestion.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface MapWithSearchProps {
  data: LatLngExpression | null; // Expected type for the position
}

const MapWithSearch: React.FC<MapWithSearchProps> = ({ data }) => {
  const initialPosition: LatLngExpression = [18.5538, 73.9477]; // Default coordinates (can be set as per requirement)

  // Create a custom marker icon
  const customIcon = new L.Icon({
    iconUrl:"https://assets.nobroker.in/nob-merchandise/map-pin.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32], 
  });

  return (
    <MapContainer
      center={data || initialPosition}
      zoom={13}
      style={{ height: "100vh", width: "100%", zIndex: "0" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <SearchBar />
      <Marker
        position={data || initialPosition}
        icon={customIcon} 
      >
        <Popup>
          {data
            ? "You are here."
            : "Default Location."}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithSearch;

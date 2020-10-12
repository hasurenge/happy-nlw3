import React from "react";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../../images/map_marker.svg";
import { MapPage, CreateButton, Sidebar, MapLocation } from "./styles";
import Location from "../Landing/Location";

const {
    REACT_APP_MAP_LAT,
    REACT_APP_MAP_LON,
    REACT_APP_MAP_ZOOM
} = process.env;

const MAP_LAT = Number(REACT_APP_MAP_LAT) || 0;
const MAP_LON = Number(REACT_APP_MAP_LON) || 0;
const MAP_ZOOM = Number(REACT_APP_MAP_ZOOM) || 15;

export default (): JSX.Element => {
    return (
        <MapPage>
            <Sidebar>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <MapLocation>
                    <Location city="Brasília" state="DF" />
                </MapLocation>
            </Sidebar>

            <Map
                center={[MAP_LAT, MAP_LON]}
                zoom={MAP_ZOOM}
                style={{
                    width: "100%",
                    height: "100%"
                }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <CreateButton to="/">
                <FiPlus size={32} color="#FFF" />
            </CreateButton>
        </MapPage>
    );
};

import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import EQ from './mapLayers/EQlayer.js';

const styles = {
    width: "100vw",
    height: "calc(100vh - 80px)",
    position: "absolute"
  };

const Map = (props) => {
    const { eqLayer, control, setControl } = props;
    const [center, setCenter] = useState({
        lng: 17.8277,
        lat: 0,
        zoom: 4.5
    })
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
  
    useEffect(() => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA";
        
      const initializeMap = () => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/outdoors-v11",
                center: [center.lng, center.lat],
                zoom: center.zoom
            });

            map.on("move", () => {
                setCenter({
                    lng: map.getCenter().lng.toFixed(4),
                    lat: map.getCenter().lat.toFixed(4),
                    zoom: map.getZoom().toFixed(2)
                })
                console.log(map.getZoom())
            });
    
            map.on("load", () => {
                if(eqLayer){
                    EQ(map)
                };

                setMap(map);
                // map.resize();
            });

        };
   
      if (!map) initializeMap({ setMap, mapContainer });
      if (!control) initializeMap({ setMap, mapContainer });
        setControl(true)
        console.log('checking amount of times rendered')
    }, [map, eqLayer]);

    return(
        <div ref={el => (mapContainer.current = el)} style={styles} />
    )
};

export default Map
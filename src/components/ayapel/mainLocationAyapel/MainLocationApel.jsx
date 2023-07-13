import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import './mainLocationAyapel.scss';
import { API_KEY_GOOGLE_MAPS} from '../../../config'
console.log(API_KEY_GOOGLE_MAPS)

const containerStyleMap = {
    width: '100vw',
    height: '550px'
};

const containerStyle = {
    width: '700px',
    height: '550px'
};

const center = {
    lat: 8.3125,
    lng: -75.145
};

function MyComponent() {
    const [map, setMap] = useState(null);
    const [zoomInterval, setZoomInterval] = useState(null);
    let currentZoom = 1;
    const [zoomStatus, setZoomStatus] = useState(currentZoom);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [directions, setDirections] = useState(null);

    useEffect(() => {
        if (map) {
            // Establecer el zoom inicial grande
            map.setZoom(2);

            // Esperar 1 segundo y luego establecer el zoom más pequeño gradualmente
            const zoomTimer = setTimeout(() => {
                currentZoom = map.getZoom();
                console.log(currentZoom);
                console.log(zoomInterval);
                const targetZoom = 16;
                const zoomStep = 1;

                const interval = setInterval(() => {
                    if (currentZoom < targetZoom) {
                        map.setZoom(currentZoom);
                        currentZoom += zoomStep;
                        setZoomStatus(currentZoom + 1)
                    } else {
                        clearInterval(interval);
                    }
                }, 500); // Intervalo de tiempo en milisegundos entre cada paso de zoom

                // setZoomInterval(interval);
            }, 800);

            // Limpiar el temporizador y el intervalo cuando el componente se desmonte
            return () => {
                clearTimeout(zoomTimer);
                clearInterval(zoomInterval); // Usar el estado zoomInterval aquí
            };
        }
    }, [map, zoomInterval]);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        calculateRoute(location);
    };

    const calculateRoute = (location) => {
        if (location) {
            const directionsService = new window.google.maps.DirectionsService();

            const origin = location; // Ubicación de partida, por ejemplo "Medellin, Colombia"
            const destination = center; // Ubicación de destino, en este caso las coordenadas de Ayapel

            directionsService.route(
                {
                    origin,
                    destination,
                    travelMode: 'DRIVING'
                },
                (result, status) => {
                    if (status === 'OK') {
                        setDirections(result);
                    }
                }
            );
        }
    };

    const locations = [
        { name: 'Medellin', address: 'Medellin, Colombia' },
        { name: 'Bogotá', address: 'Bogotá, Colombia' },
        { name: 'Cartagena', address: 'Cartagena, Colombia' },
        { name: 'Montería', address: 'Montería, Colombia' }
    ];


    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '5rem' }}>
            {zoomStatus === 17 && (
                <div className="location__description">
                    <h3 className="location__description__title">DESTINO AYAPEL</h3>
                    <p>¿Cómo llegar a Ayapel?</p>

                    <ul>
                        {locations.map((location) => (
                            <div  className='location__description__list'  key={location.name} onClick={() => handleLocationSelect(location.address)}>
                                <figure>
                                    <img src="https://cdn-icons-png.flaticon.com/128/888/888856.png" alt="" />
                                </figure>
                                <li> {location.name} </li>
                            </div>
                        ))}
                    </ul>

                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', transition: 'width 4.5s' }}>
                <LoadScript googleMapsApiKey={API_KEY_GOOGLE_MAPS}>
                    <GoogleMap
                        mapContainerStyle={zoomStatus === 17 ? containerStyle : containerStyleMap}
                        center={center}
                        zoom={2}
                        onLoad={(map) => setMap(map)}
                    >
                        {selectedLocation && directions && (
                            <DirectionsRenderer directions={directions} />
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}

export default React.memo(MyComponent);

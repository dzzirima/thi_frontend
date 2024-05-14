'use client'

import L from 'leaflet'
// import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
// import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const Map = () => {
    const [coord, setCoord] = useState([-17.82772 ,31.05337])


    const GetMyLocation = () => {
        const getMyLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCoord([position.coords.latitude, position.coords.longitude])
                })
            } else {
                console.log("Geolocation is not supported by this browser.")
            }
        }

        return (
            <div className="get-my-location">
                <button onClick={getMyLocation}>Get My Location</button>
            </div>

        )
    }

    return (
        <div>
            {/* <SearchLocation /> */}
            {/* <GetMyLocation /> */}
            <Link href="/dashboard/largemap" className=''>
          <Button  variant="contained">Map View</Button>
        </Link>
            <MapContainer style={{
                // height: '100vh',
                // width: '90vw',
                width:"800px",
                height :"200px"
            }} center={coord} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[-19.0169211, 29.1528018]}>
                     <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    )
}

export default Map
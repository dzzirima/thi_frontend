'use client'

import L from 'leaflet'
// import MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
// import MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'

import MarkerIcon from '@/assets/marker-icon.png'
import MarkerShadow from '@/assets/marker-shadow.png'

// import MarkerIcon from "@/assets/marker.png"


import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'


const LargeMap = () => {
    const [coord, setCoord] = useState([-17.831630114685986, 31.04728862296827])

    // const SearchLocation = () => {
    //     return (
    //         <div className="search-location">
    //             <input type="text" placeholder="Search Location" />
    //         </div>
    //     )
    // }

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
        <div className='flex w-full h-90'>
            <MapContainer style={{
                height: '90vh',
                width: '100vw',
                // width:"800px",
                // height :"200px"
            }} center={coord} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [29, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[-17.831630114685986, 31.04728862296827]}>
                     <Popup>
                        DeliveryNumber : XXXX 201
                        <br/>
                        Last Know Location : Lusaka ,
                        <br/>
                        estimated dilivery Time : Today 16: 30
                    </Popup>
                </Marker>

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [29, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[-17.78226109067238, 31.05456469413167]}>
                     <Popup>
                        DeliveryNumber : XXXX 201
                        <br/>
                        Last Know Location : Lusaka ,
                        <br/>
                        estimated dilivery Time : Today 16: 30
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default LargeMap
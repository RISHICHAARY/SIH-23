import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import Complaint from '../complaint';
import '../../styles/complaint.css';
export default function Map(){

    const location = window.navigator && window.navigator.geolocation

    const [ userPosition, setuserPosition ] = React.useState();

    if( location ){
        location.getCurrentPosition((position) => {
            setuserPosition( { lat: position.coords.latitude, lng: position.coords.longitude } )
            }, (error) => {
                setuserPosition( { lat: 0, lng: 0 } )
            }
        )
    }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCjyLUSxSOROikcsmM2WTMLoeFHEuq4pZQ",
    })

    if(!isLoaded){

        return(

            <div>hi</div>

        );

    }

    return(
        
        <div>
            <GoogleMap
                center={ userPosition }
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100vh' }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
            >
            <div className="complaint-content">
                <Complaint />
            </div>
                <Marker position={ userPosition } />
            </GoogleMap>
        </div>

    );
};
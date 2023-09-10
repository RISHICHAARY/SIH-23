import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

export default function Map(){

    const location = window.navigator && window.navigator.geolocation

    const [ userPosition, setuserPosition ] = React.useState();

    var R = 6371;
    let lat1=13.0449408
    let lat2=13.0749410
    let lon1=80.19968
    let lon2=80.21970
    var dLat = (lat2-lat1)* (Math.PI/180);
    var dLon = (lon2-lon1)* (Math.PI/180); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos((lat1)* (Math.PI/180)) * Math.cos((lat2)* (Math.PI/180)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    console.log(d)

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
                center={ { lat: 13.0449408, lng: 80.19968 } }
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100vh' }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
            >
                <Marker position={ userPosition } />
                <Marker position={ { lat: 13.0549410, lng: 80.21970 } } cursor="pointer"/>
            </GoogleMap>
        </div>

    );
};
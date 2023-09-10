import React from "react";
import Axios from "axios";

import "../../styles/centerAdd.css";

export default function CenterAdd(){

    const Url = "http://localhost:3001/"

    const [ name , setname ] = React.useState();
    const [ email , setemail ] = React.useState();
    const [ contact , setcontact ] = React.useState();
    const [ buildingno , setbuildingno ] = React.useState();
    const [ streetno , setstreetno ] = React.useState();
    const [ area , setarea ] = React.useState();
    const [ city , setcity ] = React.useState();
    const [ state , setstate ] = React.useState();
    const [ spez , setspez ] = React.useState();
    const [ mens , setmens ] = React.useState(0);
    const [ fez , setfez ] = React.useState(0);
    const [ password , setpassword ] = React.useState();

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

    const submit = () =>{

        if( 
            (name === null ||
            email === null ||
            contact === null ||
            buildingno === null ||
            streetno === null ||
            area === null ||
            city === null ||
            state === null ||
            spez === null ||
            password === null)
            ){
                alert(" Form Incomplete ");
            }
        else{
            if(( !email.includes("@"))){
                alert("Invalid Email");
            }
            else{
                if((contact.length !== 10)){
                    alert("Invalid Contact Number");
                }
                else{
                    Axios.put(`${Url}addCenter` , 
                        { 
                            name: name,
                            email: email,
                            contact: contact,
                            address: { buildingno: buildingno, streetno: streetno, area: area, city: city, state: state },
                            latlong: userPosition,
                            others: { spez: spez, mens: mens, fez: fez },
                            password: password, 
                        }
                    ).then(
                        (response)=>{
                            console.log(response.data);
                            if(response.data.status === "200"){
                                alert("Done");
                            }
                        }
                    );
                }
            }
        }

    }

    return(
        <div className="baseCA">
            <div className="mainCA">
                <p className="title">SIGN UP</p>
                <p className="subTitle">Fill the details to add your center.</p>
                <p className="headder">Basics:</p>
                <div className="row">
                    <input type="text" className="inputs col-1" placeholder="Center Name" onChange={(e)=>{setname(e.target.value)}}></input>
                </div>
                <div className="row">
                    <input type="text" className="inputs col-2" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}></input>
                    <input type="text" className="inputs col-2" placeholder="Contact" onChange={(e)=>{setcontact(e.target.value)}}></input>
                </div>
                <p className="headder">Address:</p>
                <div className="row">
                    <input type="text" className="inputs col-2" placeholder="BuildingNo"  onChange={(e)=>{setbuildingno(e.target.value)}}></input>
                    <input type="text" className="inputs col-2" placeholder="StreetNo" onChange={(e)=>{setstreetno(e.target.value)}}></input>
                </div>
                <div className="row">
                    <input type="text" className="inputs col-3" placeholder="Area" onChange={(e)=>{setarea(e.target.value)}}></input>
                    <input type="text" className="inputs col-3" placeholder="City" onChange={(e)=>{setcity(e.target.value)}}></input>
                    <input type="text" className="inputs col-3" placeholder="State" onChange={(e)=>{setstate(e.target.value)}}></input>
                </div>
                <p className="headder">Others:</p>
                <div className="row">
                    <input type="text" className="inputs col-1" placeholder="SpecializedIn" onChange={(e)=>{setspez(e.target.value)}}></input>
                </div>
                <div className="row">
                    <input type="number" className="inputs col-2" placeholder="Mens" onChange={(e)=>{setmens(e.target.value)}}></input>
                    <input type="number" className="inputs col-2" placeholder="FireEngines" onChange={(e)=>{setfez(e.target.value)}}></input>
                </div>
                <div className="row">
                    <input type="password" className="inputs col-1" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}></input>
                </div>
                <div className="row">
                    <button className="button col-1" onClick={()=>{submit()}}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};
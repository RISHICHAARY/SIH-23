import React from "react";

import Map from "../map";
import Header from "../headder";
import Sidebar from "../sideBar";
import Complaint from '../complaint';
import '../../styles/complaint.css';
export default function Home(){
    return(
        <div>
            <Header/>

            <div className="mapBase">
                <Map/>
            </div>
            <div className="complaint-content">
                <Complaint />
            </div>
            <Sidebar/>
        </div>
    );
}
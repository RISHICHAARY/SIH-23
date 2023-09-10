import React from "react";

import Map from "../map";
import Header from "../headder";
import Sidebar from "../sideBar";

export default function Home(){
    return(
        <div>
            <Header/>

            <div className="mapBase">
                <Map/>
            </div>

            <Sidebar/>
        </div>
    );
}
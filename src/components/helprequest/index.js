import React from "react";
import warning from '../../assets/warning.png';
import info from '../../assets/info.png';
const Request = () => {
    const imgw='87px';
    const imgh='87px';
    return (
        <div className="help-request">
            <div className="prob-tit">
                <img src={warning} width={imgw} height={imgh}></img> 
                <input type="text" placeholder="Problem Title" className="prob-tit-txt" />
            </div>
            <div className="information">
                <img src={info} width={imgw} height={imgh}></img>
                <input type="text" placeholder="Instructions" className="information-txt" />
            </div>
            <div className="req-btn">
                <button>REQUEST</button>
            </div>
        </div>
    );
}
export default Request;
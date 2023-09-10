import React from "react";
import fire from '../../assets/fire.png';
import tree from '../../assets/tree.png';
import lightning from '../../assets/thunder.png';
import edit from '../../assets/edit.png';
import snake from '../../assets/snake.png';
import rain from '../../assets/rain.png';
const Complaint = () => {
    const imgw="100px";
    const imgh="100px";
    return (
        <div className="complaint-content">
            <div className="fire-btn">
                <img src={fire} width={imgw} height={imgh}/>
            </div>
            <div className="snake-btn">
                <img src={snake} width={imgw} height={imgh}/>
            </div>
            <div className="rain-btn">
                <img src={rain} width={imgw} height={imgh}/>
            </div>
            <div className="thunder-btn">
                <img src={lightning} width={imgw} height={imgh}/>
            </div>
            <div className="tree-btn">
                <img src={tree} width={imgw} height={imgh}/>
            </div>
            <div className="edit-btn">
                <img src={edit} width={imgw} height={imgh}/>
            </div>
        </div>
    );
}
export default Complaint;
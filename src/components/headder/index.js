import React from 'react';
import loclogo from '../../assets/location.png';

const Header = (props) => {
    const current_location = "Potheri, Chengalpattu";
    const imgw = '50px'; 
    const imgh = '50px';
    return (
        <div className='header1'>
            <div className='header-content'>
                <div className='heading1'>
                    <span className="k2d-font">RES-Q</span>
                </div>
                <div className='location'>
                    <div className="location-text">
                        <h1>{current_location}</h1>
                    </div>
                    <div className="location-image">
                        <img src={loclogo} alt="Current Location" style={{ width: imgw, height: imgh }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

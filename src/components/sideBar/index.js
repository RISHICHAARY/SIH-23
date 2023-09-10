import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar-content">
            <p className='pnear'>Near You</p>
            <div className='near1'><p className='near-content'>state 1</p></div>
            <div className='near2'><p className='near-content'>state 2</p></div>
            <div className='near3'><p className='near-content'>center 1</p></div>
            <div className='near4'><p className='near-content'> center 2</p></div>
            <div className='news'><p className='news-content'>News</p><p>Cyclone to make landfall in cuddalore.</p></div>
        </div>
    );
}
export default Sidebar;
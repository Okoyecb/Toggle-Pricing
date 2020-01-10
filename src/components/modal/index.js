import React from 'react';
// import Data from  '../data'
import 'bootstrap/dist/css/bootstrap.min.css';

import './modal.scss';

const Modal = ({carditem }) => {
    const { plan, price, storage, users, GB } = carditem;

return(
    <div className='moda'>
        <p>{plan}</p>
        <p className='price'>${price}</p>
        <p>{storage} Storage</p>
        {/* <hr /> */}
        <p>{users} user allowed</p>
        {/* <hr /> */}
        <p>Send up to {GB}</p>
        {/* <hr/> */}
        <div classsName='container'>
            <button className='bt'>Learn More</button>
        </div>
    </div>
    )
}

export default Modal;
import React from 'react';
import { Link } from 'react-router-dom'

const Routeitem = (props) => {
    return (
        <Link className='routeItem' to={props.link}>
            <img src={props.src} alt="icon" />
            <p>{props.name}</p>
        </Link>
    );
}

export default Routeitem;

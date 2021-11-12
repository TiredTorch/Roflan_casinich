import React from 'react';
import Routeitem from './Nav/RouteItem.jsx';
import Icon from '../img/logo.png';
import BJ from '../img/cards.png';
//import Slots from '../img/slot.png';
//import Ball from '../img/ball.png';
import Soon from '../img/coming.png';

const Nav = () => {
    return (
        <nav class='navchik'>
            <Routeitem src={Icon} link={'/Main'} name='dfsdf'/>
            <Routeitem src={BJ} link={'/BJ'} name='Блекджек'/>
            <Routeitem src={Soon} link={'#'} name='Автоматы (В разработке)'/>
            <Routeitem src={Soon} link={'#'} name='Предсказания (В разработке)'/>
            <Routeitem src={Soon} link={'#'} name='В разработке'/>
        </nav>
    );
}

export default Nav;

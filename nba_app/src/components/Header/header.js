import React from 'react';
import style from './header.css'
import {Link} from 'react-router-dom';

import FontAwesome from 'react-fontawesome'
import SideNav from './SideNav/sideNav'

const Header = (props) => {

    const navbars = () => (
        <div className={style.bars}>
            <FontAwesome name='bars'
                onClick={props.onOpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    );

    const logo = () => (
        <Link className={style.logo} to='/'>
            <img src="/images/nba_logo.png" alt="logo"/>
        </Link>
    );

    return (
        <header className={style.header}>
            <SideNav {...props}/>

            <div className={style.headerOpt}>
                {navbars()}
                {logo()}
            </div>
        </header>
    )
};

export default  Header

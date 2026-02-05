import React, { useContext } from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import {AppContext} from '../../appcontext/AppContext';

const Layout = () => {
    const {darkMode} = useContext(AppContext)
    return (
        <div>
            <Header darkMode={darkMode}></Header>
            
            <Outlet></Outlet>

            <Footer darkMode={darkMode}></Footer>

        </div>
    );
};

export default Layout;
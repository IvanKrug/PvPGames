import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';


export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow container mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/logo.png';
import { HiOutlineShoppingCart } from "react-icons/hi";

const NavBar = () => {
    return (
        <header className="sticky top-0 bg-gradient-to-b from-pvp-azul-900 via-100% to-pvp-azul-800/90 z-10">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-16 h-16 rounded" />
                </Link>
                <ul className="flex space-x-4">
                    <li><Link to="/Us" className="text-white hover:text-gray-400">Nosotros</Link></li>
                    <li><a href="/products" className="text-white hover:text-gray-400">Productos</a></li>
                    <li><Link to="/shop" className="text-white hover:text-gray-400">Carrito</Link></li>


                </ul>
                <div className="flex items-center space-x-4">
                    <Link to="/login">
                        <button className="py-2 px-4 rounded bg-pvp-verde hover:bg-pvp-verde/60 transition-colors duration-300 focus:outline-none focus:ring focus:ring-indigo-100 text-white">
                            Iniciar Sesión
                        </button>
                    </Link>
                    <Link to="/shop">
                    <HiOutlineShoppingCart color='white' size={24} />
                    </Link>
                    
                </div>
            </nav>
        </header>
    );
}

export default NavBar;

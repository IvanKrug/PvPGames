import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LandingPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        const response = axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleAddToCart = (item, quantity) => {
        console.log(`Adding ${quantity} of ${item.title} to cart.`);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">

            <main className="p-8">
                <section className="text-center mb-8">
                    <h2 className="text-2xl font-semibold">Bienvenido a la mejor tienda de videojuegos online</h2>
                    <p className="mt-4 text-gray-400">Encuentra los mejores títulos y las últimas novedades en videojuegos.</p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {items.map(item => (
                        <div key={item.id} className="bg-gradient-to-b from-pvp-azul-900 via-pvp-azul-800 to-pvp-azul-800 w-full max-w-sm p-4 space-y-3 rounded-xl shadow-2xl flex flex-col">
                            <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded" />
                            <div className="flex-grow">
                                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 text-gray-400">
                                    {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-gray-200 font-bold text-xl">${item.price}</div>
                                <div className="flex items-center">
                                    <input type="number" className="px-3 max-w-20 py-2 border rounded-l text-gray-900 focus:outline-none focus:border-pvp-verde" min="1" defaultValue="1" />
                                    <button onClick={() => handleAddToCart(item, 1)} className="font-semibold py-2 px-4 rounded-r text-white bg-pvp-verde hover:bg-pvp-verde/60 transition-colors duration-300 focus:outline-none focus:ring focus:ring-indigo-100">
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default LandingPage;

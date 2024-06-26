import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=4');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-pvp-azul-900 to-pvp-azul-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Acerca de Nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Descubre tu estilo único
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            En [Nombre de la Tienda], creemos que la moda es una forma de expresión personal. Desde nuestros inicios en [Año], hemos estado dedicados a ofrecer prendas únicas y de alta calidad que permiten a nuestros clientes destacar y sentirse seguros.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-lg leading-6 font-medium text-gray-300 text-center">Algunos de nuestros productos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center bg-white rounded-lg p-4 transform transition duration-500 hover:scale-105 hover:shadow-xl"
              >
                <img className="w-full h-64 object-cover rounded-lg" src={product.image} alt={product.title} />
                <h4 className="mt-4 text-lg font-medium text-gray-900 text-center">{product.title}</h4>
                <p className="mt-2 text-base text-gray-500 text-center">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

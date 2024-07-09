// ShoppingCart.jsx
import React, { useState } from 'react';


const ShoppingCart = () => {
  const [product, setProduct] = useState('');
  const [cart, setCart] = useState([]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (product.trim()) {
      setCart([...cart, { id: Date.now(), name: product }]);
      setProduct('');
    }
  };

  const handleRemoveProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-b from-pvp-azul-900 via-pvp-azul-800 to-pvp-azul-800 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Tus Carrito</h2>
      <form onSubmit={handleAddProduct} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Ingresa el nombre del producto"
            required
          />
          <button
            type="submit"
            className="ml-2 bg-pvp-verde hover:bg-pvp-verde/60 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            Agregar
          </button>
        </div>
      </form>
      <ul className="list-disc list-inside text-white">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <button
              onClick={() => handleRemoveProduct(item.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => alert('Compra realizada')}
            className="bg-pvp-verde hover:bg-pvp-verde/60 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            Realizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

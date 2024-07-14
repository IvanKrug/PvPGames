import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    platform: '',
    picture: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const result = await response.json();
      console.log(result);

      // Reset form after successful submission
      setFormData({
        name: '',
        category: '',
        price: '',
        platform: '',
        picture: '',
        description: ''
      });

      alert('Product added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Add a New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a category</option>
            <option value="RPG">RPG</option>
            <option value="Shooter">Shooter</option>
            <option value="Adventure">Adventure</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Sports">Sports</option>
            <option value="Racing">Racing</option>
            <option value="Simulation">Simulation</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter product price"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="platform">
            Platform
          </label>
          <select
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a platform</option>
            <option value="PS4">PS4</option>
            <option value="PS5">PS5</option>
            <option value="PC">PC</option>
            <option value="Xbox One">Xbox One</option>
            <option value="Xbox Series X">Xbox Series X</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="picture">
            Picture URL
          </label>
          <input
            type="text"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter picture URL"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter product description"
            rows="4"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

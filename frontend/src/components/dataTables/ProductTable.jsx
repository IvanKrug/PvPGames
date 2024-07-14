
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';


const ProductTable = () => {
    const [products, setProducts] = useState([])

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
            format: row => `$${row.price.toFixed(2)}`,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Platform',
            selector: row => row.platform,
            sortable: true,
        },
        {
            name: 'Picture',
            selector: row => row.picture,
            cell: row => <img src={row.picture} alt={row.name} width={50} height={50} />,
        },
    ];

    const data = [
        {
            _id: { "$oid": "668da8475bccca810aabbb5c" },
            price: 59.99,
            category: 'Acción RPG',
            description: 'Explora un vasto mundo de fantasía creado por Hidetaka Miyazaki y George R. R. Martin.',
            name: 'Elden Ring',
            picture: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
            platform: 'PS4,PS5,Xbox Series X|S ,PC',
            createdAt: { "$date": "2024-07-09T21:14:47.472Z" },
            updatedAt: { "$date": "2024-07-09T21:14:47.472Z" },
            __v: 0
        },
    ];

    return (
        <>
            <h1 className='text-lg'> Tabla de Productos </h1>
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </>
    )
}

export default ProductTable

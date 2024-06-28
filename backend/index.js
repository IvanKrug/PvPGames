const express = require('express');

const app = express();
const port = 3000;

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

const ps5Games = [
    {
        name: "Spider-Man: Miles Morales",
        price: 49.99,
        category: "Action-Adventure"
    },
    {
        name: "Demon's Souls",
        price: 69.99,
        category: "RPG"
    },
    {
        name: "Ratchet & Clank: Rift Apart",
        price: 69.99,
        category: "Platformer"
    },
    {
        name: "Returnal",
        price: 69.99,
        category: "Roguelike"
    },
    {
        name: "Sackboy: A Big Adventure",
        price: 59.99,
        category: "Platformer"
    }
];
const pc = [
    {
        name: "CSGO2",
        price: 49.99,
        category: "Action-Adventure"
    },
    {
        name: "DIABLO4",
        price: 69.99,
        category: "RPG"
    },
    {
        name: "Ratchet & Clank: Rift Apart",
        price: 69.99,
        category: "Platformer"
    },
    {
        name: "Returnal",
        price: 69.99,
        category: "Roguelike"
    },
    {
        name: "Sackboy: A Big Adventure",
        price: 59.99,
        category: "Platformer"
    }
];


// Ruta básica
app.get('/playstation', (req, res) => {
    res.send(ps5Games);
});

app.get('/pc', (req, res) => {
    res.send(pc);
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

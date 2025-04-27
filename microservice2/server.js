const express = require('express');
const app = express();
const port = 3002;

// Endpoint para obtener órdenes
app.get('/orders', (req, res) => {
    res.json([
        { orderId: 101, userId: 1, product: 'Laptop' },
        { orderId: 102, userId: 2, product: 'Smartphone' }
    ]);
});

app.listen(port, () => {
    console.log(`Microservicio Orders en http://localhost:${port}`);
});

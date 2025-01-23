const express = require('express');
const { initDatabase } = require('./database');
const authRoutes = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);

async function startServer() {
    try {
        await initDatabase();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Server startup error:', err);
    }
}
startServer();
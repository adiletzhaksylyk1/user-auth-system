const { pool } = require('./database');

class User {
    static async register(username, email, password) {
        const client = await pool.connect();
        try {
            const existingUser = await client.query(
                'SELECT * FROM users WHERE username = $1 OR email = $2',
                [username, email]
            );
            if (existingUser.rows.length > 0) {
                throw new Error('Username or email already exists');
            }
            const result = await client.query(
                'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
                [username, email, password]
            );
            return result.rows[0].id;
        } finally {
            client.release();
        }
    }

    static async login(email, password) {
        const client = await pool.connect();
        try {
            const result = await client.query(
                'SELECT * FROM users WHERE email = $1',
                [email]
            );
            if (result.rows.length === 0) {
                throw new Error('User not found');
            }
            const user = result.rows[0];
            if (user.password !== password) {
                throw new Error('Invalid password');
            } return true;
        } finally {
            client.release();
        }
    }
}

module.exports = User;
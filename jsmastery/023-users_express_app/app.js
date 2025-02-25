import express from 'express';
import 'dotenv/config';
import usersRoutes from './routes/users.routes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from main endpoint!');
});

app.use('/users', usersRoutes);

const port = process.env.Port || 5000;
app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`);
});

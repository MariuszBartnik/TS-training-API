import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import utilsRoutes from './routes/utils';

const app = express();

app.use(
	cors({
		origin: true,
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/authors', userRoutes);
app.use('/posts', postRoutes);
app.use('/utils', utilsRoutes);

app.listen(5000, () => console.log('App started on port 5000'));

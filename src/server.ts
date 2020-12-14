import 'dotenv/config';

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`...... Started on port ${process.env.PORT}!`);
});

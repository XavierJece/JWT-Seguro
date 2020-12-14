import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import auth from 'config/auth';
import { v4 } from 'uuid';

const routes = Router();

routes.get('/', (request, response) =>
	response.json({ mensagem: 'Hello Word!! #NEVERSTOPLEARNING' }),
);

routes.post('/generatorJWT', (request, response) => {
	const id = v4();
	const { privateKey = '', expiresIn } = auth.jwt;

	const token = sign({}, privateKey, {
		subject: id,
		expiresIn,
		algorithm: 'RS256',
	});

	return response.json({
		mensagem: 'Hello Word!! #NEVERSTOPLEARNING',
		status: 200,
		token,
	});
});

export default routes;

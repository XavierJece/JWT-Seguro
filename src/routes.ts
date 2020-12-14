import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import auth from 'config/auth';
import { v4 } from 'uuid';
import authentication from './middlewares/Authentication';

const routes = Router();

routes.get('/', (request, response) =>
	response.json({ mensagem: 'Hello Word!! #NEVERSTOPLEARNING' }),
);

routes.post('/generatorJWT', (request, response) => {
	try {
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
	} catch (error) {
		return response.json(error);
	}
});

routes.get('/message', authentication, (request, response) => {
	try {
		return response.json({
			mensagem: 'Hello Word!! #NEVERSTOPLEARNING',
			status: 200,
			id: request.content.id,
			easterEgg:
				'OI!! Eae tudo bem? espero que consiga ver essa mensagem hehe. Estou adorando o DO WHILE 2020, parabéns pelo evento. Vou contar um segredo... Tenho uma vontade de participar no ano que vem, mas sendo alguém que está ai fazendo acontecer!! PS: Um salve do leo!!!',
		});
	} catch (error) {
		return response.json({ error });
	}
});

export default routes;

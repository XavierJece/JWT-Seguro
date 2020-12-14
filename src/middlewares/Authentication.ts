import auth from 'config/auth';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '../AppError';

interface ITokenPayload {
	iat: number;
	exp: number;
	sub: string;
}

export default function Authentication(
	request: Request,
	response: Response,
	next: NextFunction,
): void {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		return response.json({ error: 'O token JWT está ausente' });
	}

	const [, token] = authHeader.split(' ');

	try {
		const { publicKey = '' } = auth.jwt;

		const decoded = verify(token, publicKey);

		const { sub } = decoded as ITokenPayload;

		request.content = {
			id: sub,
		};

		return next();
	} catch {
		return response.json({ error: 'Token JWT inválido' });
	}
}

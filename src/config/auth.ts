export default {
	jwt: {
		privateKey: process.env.APP_SECRET_PRIVATE_KEY,
		publicKey: process.env.APP_SECRET_PRIVATE_PUBLIC,
		expiresIn: '15min',
	},
};

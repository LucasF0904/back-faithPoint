/* eslint-disable no-useless-escape */
import cors from 'cors';

const allowedOrigins = [/\dev.faithpoint.us$/, /\homolocagacao.faithpoint.us$/, /\faithpoint.us$/];

const options: cors.CorsOptions = {
	origin: allowedOrigins,
};

export default options;

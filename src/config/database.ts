import 'dotenv/config';

const database = {
	/*
	   |--------------------------------------------------------------------------
	   | Database Connections
	   |--------------------------------------------------------------------------
	   |
	   | Here are each of the database connections setup for your application.
	   | Of course, examples of configuring each database platform that is
	   | supported by node is shown below to make development simple.
	   |`
	*/
	connections: [
		{
			name: 'default',
			drive: process.env.FAITHPOINT_DRIVE || 'postgres',
			type: process.env.FAITHPOINT_TYPE || 'postgres',
			host: process.env.FAITHPOINT_HOST || 'localhost',
			database: process.env.FAITHPOINT_DATABASE || 'faithpoint',
			port: process.env.FAITHPOINT_PORT || 5432,
			username: process.env.FAITHPOINT_USERNAME || 'postgres',
			password: process.env.FAITHPOINT_PASSWORD || 'postgres',
			schema: process.env.FAITHPOINT_SCHEMA || 'public',
			synchronize: true,
			debug: true,
		},
	],
};

export default database;

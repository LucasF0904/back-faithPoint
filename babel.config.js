/* eslint-disable no-undef */
module.exports = {
	presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript', '@babel/preset-flow'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@domain': './src/domain',
					'@config': './src/config',
					'@shared': './src/shared',
					'@routes': './src/shared/http/routes/*',
				},
			},
		],
		'babel-plugin-transform-typescript-metadata',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		['@babel/plugin-proposal-class-properties', { loose: true }],
		'@babel/plugin-syntax-flow',
	],
};

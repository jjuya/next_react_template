module.exports = (api) => {
	api.cache(true)
	const presets = [
		[
			'next/babel',
			{
				'preset-env': {
					useBuiltIns: 'entry',
					targets: {
						browsers: ['last 2 versions', '>= 5% in KR'],
					},
					corejs: 3,
					// debug: true,
				},
			},
		],
	]

	// dotenv setting
	const env = {
		development: {
			plugins: [
				[
					'dotenv-import',
					{
						moduleName: '@env',
						path: '.env',
					},
				],
			],
		},
		staging: {
			plugins: [
				[
					'dotenv-import',
					{
						moduleName: '@env',
						path: '.env.staging',
					},
				],
			],
		},
		production: {
			plugins: [
				[
					'dotenv-import',
					{
						moduleName: '@env',
						path: '.env.production',
					},
				],
			],
		},
	}

	const plugins = [
		[
			'dotenv-import',
			{
				moduleName: '@env',
				path: '.env',
				blacklist: null,
				whitelist: null,
				safe: false,
				allowUndefined: false,
			},
		],

		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		],
		['@babel/plugin-syntax-dynamic-import'],op
		['@babel/plugin-proposal-optional-chaining'],
	]

	return {
		presets,
		plugins,
		env,
	}
}

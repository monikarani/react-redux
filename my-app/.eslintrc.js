module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: ['eslint:recommended', 'prettier', 'react-app'],
	plugins: ['prettier', 'react'],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	rules: {
		// indent: [2, 4],
		'linebreak-style': [2, 'unix'],
		quotes: [1, 'single'],
		semi: [2, 'always'],
		'no-unused-vars': [2, { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
		'no-dupe-keys': [2],
		'no-console': [2],
		'prettier/prettier': [2, null, '@prettier']
	}
};

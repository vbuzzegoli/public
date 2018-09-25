module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: "eslint:recommended",
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		indent: ["off", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": 0,
		"no-undef": 1,
		"no-unused-vars": [
			"warn",
			{ vars: "all", args: "after-used", ignoreRestSiblings: false }
		],
		"react/jsx-filename-extension": ["warn", { extensions: [".jsx"] }]
	}
};
 

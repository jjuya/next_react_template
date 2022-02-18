const React = require('react')
const path = require('path')

const custom = require('./webpack.config.js')

module.exports = {
	stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	webpackFinal: async (config) => {
		return { ...config, module: { ...config.module, rules: custom.module.rules } }
	},
}

import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	typescript: {
		check: true,
	},
	webpackFinal: async (config: any) => {
		config.resolve.alias = {
			'@/components': path.resolve(__dirname, '../src/components'),
		}
		return config
	},
}

export default config

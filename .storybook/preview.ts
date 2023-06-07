import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import type { Preview } from '@storybook/react'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		globalTypes: {
			theme: {
				description: 'Global theme for components',
				defaultValue: 'dark',
				toolbar: {
					title: 'Theme',
					icon: 'circlehollow',
					items: ['light', 'dark'],
					dynamicTitle: true,
				},
			},
		},
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#00aced',
				},
				{
					name: 'light',
					value: '#3b5998',
				},
			],
		},
		parameters: {
			viewport: {
				viewports: INITIAL_VIEWPORTS,
			},
		},
	},
}

export default preview

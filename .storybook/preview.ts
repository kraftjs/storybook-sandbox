import type { Preview, Decorator } from '@storybook/svelte';
import { withThemeByDataAttribute } from '@storybook/addon-styling';
import '../src/lib/index.css'

export const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
};

export const decorators: Decorator[] = [
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
		attributeName: 'data-mode',
	}),
];

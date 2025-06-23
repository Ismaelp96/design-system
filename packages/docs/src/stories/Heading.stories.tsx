import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@ignite-ui/react';

const meta = {
	title: 'Typography/Heading',
	component: Heading,
	tags: ['autodocs'],
	args: {
		children: 'H1 heading',
		size: 'md',
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
			control: {
				type: 'inline-radio',
			},
		},
	},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const CustomTag: Story = {
	args: {
		children: 'Custom title h2',
		as: 'h2',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Por padrão o heading sempre será `h2`, mas podemos alterar isso com a propriedade `as`.',
			},
		},
	},
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@ignite-ui/react';

const meta = {
	title: 'Typography/Heading',
	component: Heading,
	tags: ['autodocs'],
	args: {
		children: 'Custom title',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Por padrão o heading sempre será `h2`, mas podemos alterar isso com a propriedade `as`.',
			},
		},
	},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const CustomTag: Story = {
	args: {
		children: 'h1 heading',
		as: 'h2',
	},
};

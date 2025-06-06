import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from '@ignite-ui/react';

const meta = {
	title: 'Button',
	component: Button,

	args: {
		children: 'Enviar',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};

export const Large: Story = {
	args: { size: 'large' },
};

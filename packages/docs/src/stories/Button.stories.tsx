import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@ignite-ui/react';
import { ArrowRight } from 'phosphor-react';

const meta = {
	title: 'Form/Button',
	component: Button,
	tags: ['autodocs'],
	args: { children: 'Send' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Create new',
	},
};

export const Tertiary: Story = {
	args: {
		variant: 'tertiary',
		children: 'Cancel',
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
		children: 'Small',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				Próximo passo <ArrowRight weight='bold' />
			</>
		),
	},
};

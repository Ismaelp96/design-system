import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@ignite-ui/react';
import { ArrowRight } from 'phosphor-react';

const meta = {
	title: 'Form/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Send',
		variant: 'primary',
		size: 'md',
		disabled: false,
	},
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: { type: 'inline-radio' },
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
		size: {
			options: ['sm', 'md'],
			control: { type: 'inline-radio' },
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				Próximo passo <ArrowRight weight='bold' />
			</>
		),
	},
	argsType: {
		control: {
			type: null,
		},
	},
	argTypes: {
		children: { control: { type: null } },
	},
};

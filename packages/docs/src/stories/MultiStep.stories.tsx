import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultiStep, Box } from '@ignite-ui/react';

const meta = {
	title: 'Form/MultiStep',
	component: MultiStep,
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<Box
					as='label'
					css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
					{Story()}
				</Box>
			);
		},
	],
	args: {
		size: 4,
		currentStep: 1,
	},
} satisfies Meta<typeof MultiStep>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const Full: Story = {
	args: {
		currentStep: 4,
	},
};

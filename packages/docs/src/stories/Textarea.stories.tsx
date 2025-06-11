import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Text, TextArea } from '@ignite-ui/react';

const meta = {
	title: 'Form/TextArea',
	component: TextArea,
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<Box
					as='label'
					css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
					<Text size='sm'>Observations</Text>
					{Story()}
				</Box>
			);
		},
	],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		placeholder: 'Add any observations...',
	},
};
export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

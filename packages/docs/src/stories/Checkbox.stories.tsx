import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Checkbox, Text } from '@ignite-ui/react';

const meta = {
	title: 'Form/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<Box as='label' css={{ display: 'flex', gap: '$2' }}>
					{Story()}
					<Text size='sm'>Accept terms of use?</Text>
				</Box>
			);
		},
	],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

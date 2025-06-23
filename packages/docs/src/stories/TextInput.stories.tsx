import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box, Text, TextInput } from '@ignite-ui/react';

const meta = {
	title: 'Form/TextInput',
	component: TextInput,
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<Box
					as='label'
					css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
					<Text size='sm'>Email address</Text>
					{Story()}
				</Box>
			);
		},
	],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Disabled: Story = {};
export const WithPrefix: Story = {
	args: {
		prefix: 'cal.com/',
	},
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Text } from '@ignite-ui/react';

const meta = {
	title: 'Surfaces/Box',
	component: Box,
	args: {
		children: (
			<>
				<Text>Testando o elemento BOX</Text>
			</>
		),
	},
	argTypes: {
		children: { control: { type: null } },
	},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

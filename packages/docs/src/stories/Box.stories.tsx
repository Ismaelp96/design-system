import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, type BoxProps } from '@ignite-ui/react';

const meta = {
	title: 'Surfaces/Box',
	component: Box,
	args: {
		children: (
			<>
				<span>Testando o elemento BOX</span>
			</>
		),
	},
} satisfies Meta<BoxProps>;

export default meta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {};

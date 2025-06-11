import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '@ignite-ui/react';

const meta = {
	title: 'Data display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/ismaelp96.png',
		alt: 'Ismael Patrick',
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};
export const WithFallback: Story = {
	args: {
		src: undefined,
	},
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '@ignite-ui/react';

const meta = {
	title: 'Data display/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	args: {
		src: 'https://github.com/ismaelp96.png',
		alt: 'Ismael Patrick',
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const WithFallback: Story = {
	args: {
		src: undefined,
	},
	argTypes: {
		src: {
			control: {
				type: 'text',
			},
		},
	},
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '@ignite-ui/react';

const meta = {
	title: 'Typography/Text',
	component: Text,
	args: {
		children:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ab quis, provident distinctio est eligendi quos sapiente ratione dolore fugiat consectetur dolorem. Odit quaerat deserunt est numquam sapiente libero accusantium?',
		size: 'md',
	},
	argTypes: {
		size: {
			options: [
				'xxs',
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl',
			],
			control: {
				type: 'inline-radio',
			},
		},
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = {
	args: {
		children: 'Strong Text',
		as: 'strong',
		size: 'lg',
	},
};

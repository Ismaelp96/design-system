import { ComponentProps } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
	all: 'unset',
	fontSize: '$sm',
	fontFamily: '$default',
	fontWeight: '$medium',
	textAlign: 'center',

	borderRadius: '$sm',
	padding: '0 $4',
	cursor: 'pointer',

	minWidth: 120,
	boxSizing: 'border-box',

	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '$2',
	transition: 'all 0.2s ease',

	svg: {
		width: '$4',
		height: '$4',
	},

	'&:disabled': { cursor: 'not-allowed' },
	variants: {
		variant: {
			primary: {
				color: '$white',
				backgroundColor: '$green500',
				'&:disabled': {
					backgroundColor: '$gray200',
				},
				'&:not(:disabled):hover': {
					backgroundColor: '$green300',
				},
			},
			secondary: {
				color: '$green300',
				border: '2px solid $green500',
				'&:disabled': {
					borderColor: '$gray200',
					color: '$gray200',
				},
				'&:not(:disabled):hover': {
					backgroundColor: '$green500',
					color: '$white',
				},
			},
			tertiary: {
				color: '$gray100',
				'&:disabled': {
					color: '$gray600',
				},
				'&:not(:disabled):hover': {
					color: '$white',
				},
			},
		},
		size: {
			sm: { height: 38 },
			md: {
				height: 46,
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export interface ButtonProps extends ComponentProps<typeof Button> {}

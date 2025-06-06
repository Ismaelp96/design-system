import { styled } from '../styles';

export const Button = styled('button', {
	fontFamily: '$default',
	backgroundColor: '$green300',
	borderRadius: '$sm',
	border: 0,
	cursor: 'pointer',
	fontWeight: '$bold',
	color: '$white',
	variants: {
		size: {
			small: {
				fontSize: 14,
				padding: '$2 $4',
			},
			large: {
				fontSize: 16,
				padding: '$3 $6',
			},
		},
	},
	defaultVariants: {
		size: 'small',
	},
});

export type ButtonProps = {
	size: 'small' | 'large';
};

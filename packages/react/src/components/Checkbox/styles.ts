import * as Checkbox from '@radix-ui/react-checkbox';
import { styled, keyframes } from '../../styles';

export const CheckboxContainer = styled(Checkbox.Root, {
	all: 'unset',
	width: '$6',
	height: '$6',
	backgroundColor: '$gray900',
	borderRadius: '$xs',
	lineHeight: 0,
	cursor: 'pointer',
	overflow: 'hidden',
	boxSizing: 'border-box',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	border: '2px solid $gray900',
	'&:focus': {
		border: '2px solid $green300',
	},
	'&[data-state="checked"]': {
		backgroundColor: '$green300',
	},
	'&[data-state="unchecked"]': {
		borderColor: '$gray900',
	},
});

const slideIn = keyframes({
	from: { transform: 'translateX(-100%)' },
	to: { transform: 'translateX(0%)' },
});

const slideOut = keyframes({
	from: { transform: 'translateX(0%)' },
	to: { transform: 'translateX(-100%)' },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
	color: '$white',
	height: '$4',
	width: '$4',

	'&[data-state="unchecked"]': {
		borderColor: '$gray900',
		animation: `${slideOut} 200ms ease-out`,
	},

	'&[data-state="checked"]': {
		animation: `${slideIn}  200ms ease-out`,
	},
});

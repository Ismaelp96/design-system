import { ComponentProps } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
	padding: '$4',
	borderRadius: '$md',
	backgroundColor: '$gray800',
	border: '1px solid $gray600',
	color: '$gray100',
});

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box';

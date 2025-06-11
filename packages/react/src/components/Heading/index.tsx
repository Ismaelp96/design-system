import { ComponentProps } from 'react';
import { HeadingContainer } from './style';

export interface HeadingProps extends ComponentProps<typeof HeadingContainer> {}

export function Heading({ ...props }: HeadingProps) {
	return <HeadingContainer {...props} />;
}

import { styled } from './styles';

const Button = styled('button', {
	fontFamily: '$default',
	backgroundColor: '$gray900',
});

export function App() {
	return <Button>Hello World</Button>;
}

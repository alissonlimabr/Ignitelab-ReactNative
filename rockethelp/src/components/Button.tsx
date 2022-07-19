import { Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base';
// Define um tipo (props) e passa uma propriedade title
type Props = {
    title: string;
}

// função que define o button do native-base resgata o {title}
export function Button({title}:Props) {
  return (
    <ButtonNativeBase>
        <Heading>
            {title}
        </Heading>    
    </ButtonNativeBase>
  );
}
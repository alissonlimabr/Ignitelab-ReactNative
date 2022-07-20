import { Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base';
// Props recebe a união de tipos IButtonProps (estilização) +
// propriedade title
type Props = IButtonProps & {
    title: string;
}

// Resgata o title e o restante das estilizações definidas no chamamento do component.
export function Button({title, ... rest}:Props) {
  return (
    // "rest..." Despeja as demais estilizações direamente no ButtonNativeBase.
    // "_pressed" = ao pressionar, ativa as pseudoproperties definidas (muda a cor)
    <ButtonNativeBase {...rest}
      h={14}
      bg="green.700"
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500",
      }}
    >

        <Heading color="white" fontSize="md">
            {title}
        </Heading>    
    </ButtonNativeBase>
  );
}
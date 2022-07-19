// Renomeia importação do Input do native base, para evitar conflito com o nome do component.
// Importa a tipagem do input do Native-base. O que possibilita usar o intelisense para estilizar
import { Input as NativeBaseInput, IInputProps } from 'native-base';

// borderWidth = largura da borda
// placeholderTextColor = cor do placeholder
// IInputProps = tipagem estabelecida para o input
// _elemento = elemento com pseudoproperties que podem ser manipuladas (ex: focus)
export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput 
    bg="gray.700"
    h={14}
    size="md"
    borderWidth={0}
    fontSize="md"
    fontFamily="body"
    color="white"
    placeholderTextColor="gray.300"
    // _focus = semelhante ao hover. Quando o usuário seleciona o input, ele é ativado.
    _focus={{
      // tamanho da borda
      borderWidth: 1,
      // cor da borda
      borderColor: "green.500",
      // cor de fundo
      bg: "gray.700"
    }}

    // ...rest = operator responsável por receber outras estilizações declaradas quando chama o component
    {...rest}
    
    />
  );
}
// Renomeia importação do Input do native base, para evitar conflito com o nome do component.
// Importa a tipagem do input do Native-base. O que possibilita usar o intelisense para estilizar
import { Input as NativeBaseInput, IInputProps } from 'native-base';

// borderWidth = largura da borda
// placeholderTextColor = cor do placeholder
// ...rest = operator responsável por receber outras estilizações declaradas quando chama o component
// IInputProps = tipagem estabelecida para o input
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
    {...rest}
    
    />
  );
}
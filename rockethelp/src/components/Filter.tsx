import { VStack, Text, Button, IButtonProps, useTheme } from 'native-base';

// Tipagem Props com as propriedades a serem resgatadas na filtragem
type Props = IButtonProps & {
    title: String;
    isActive?: boolean;
    type: 'open' | 'closed';
}

export function Filter({title, isActive = false, type, ...rest}: Props) {
  
    const {colors} = useTheme();
    // If ternário que condiciona a cor #996DFF ao type 'open' e a cor #FBA94C ao type 'closed'
    const colorType = type === 'open' ? colors.secondary[700] : colors.primary[300];
    return (
        <Button
            // variant="outline" remove a cor de fundo e deixa apenas o contorno no botão
            variant="outline"
            // Se o elemento estiver ativo, adiciona uma borda de tamanho 1.
            borderWidth={isActive ? 1 : 0}
            // Condiciona a cor da borda a variável colorType
            borderColor={colorType}
            bgColor="gray.600"
            flex={1}
            size="sm"
            {...rest}
            >
                {/* Caso o texto seja ativo, adiciona a propriedade colorType. Caso naõ, adiciona outra cor */}
            <Text color={isActive ? colorType : 'gray.300'}>
                {title}
            </Text>
        </Button>
    );
}
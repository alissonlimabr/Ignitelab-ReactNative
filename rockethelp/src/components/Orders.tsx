// my = margin na vertical, isto é, no eixo Y.
// ml = margin left

import { Box, Circle, HStack, Text, useTheme, VStack } from 'native-base';
import { ClockAfternoon } from 'phosphor-react-native';

// exporta a tipagem para uso posterior, possibilitando saber quais propriedades ela tem
export type OrdersProps = {
    id: string,
    patrimony: string,
    when: string,
    status: 'open' | 'closed',
}

// A lógica é receber todos os dados de OrdersProps dentro de um objeto chamado data
// Ele será usado para acessar as informações de OrdersProps quando chamar esse componente
type Props = {
    data: OrdersProps
}

// Passa como parâmetro o data e todo o restante dos objetos do tipo Props
export function Orders({data, ...rest}: Props) {
    
    // useTheme dá acesso as cores do meu tema
    const {colors} = useTheme();
    // If ternário que condiciona a cor #996DFF ao status do tipo 'open' e a cor #FBA94C ao type 'closed'
    const statuscolor = data.status === 'open' ? colors.secondary[700] : colors.primary[300];

  return (
    <HStack
    bg="gray.600"
    mb={4}
    alignItems="center"
    justifyContent="space-between"
    rounded="sm"
    // o hidden delimita a área para dentro do HStack, ou seja, o Box não salta para fora dos cantos arredondados
    overflow="hidden"
    >
        <Box h="full" w={2} bg={statuscolor}/>

        <VStack flex={1} my={5} ml={5}>
            <Text color="white" font-size="md">
                Patrimônio: {data.patrimony}
            </Text>
            <HStack alignItems="center">
                <ClockAfternoon size={15} color={colors.gray[300]}/>
                <Text color="gray.200" font-size="xs" ml={1}>
                    {data.when}
                </Text>
            </HStack>
        </VStack>
    {/* Elemento de círculo do native-base que já contém o formato arredondado */}
    <Circle bg="gray.500" h={12} w={12} mr={5}>
    </Circle>
    </HStack>
  );
}
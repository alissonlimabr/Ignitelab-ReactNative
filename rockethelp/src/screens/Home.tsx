// VStack coloca os elementos um embaixo do outro
// HStack coloca os elementos um ao lado do outro
// IconButton = Botão com ícone do native-base, mantendo as propriedades onPress etc...
// space = semelhante ao gap do css puro. Ele gera um espaçamento entre os elementos
import { Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import Logo from '../assets/logo_primary.svg';
import { Filter } from '../components/Filter';


export function Home() {
    const {colors} = useTheme();
  return (
    <VStack flex={1} pb={6} bg="gray.700">
        {/* Cabeçalho da tela */}
        <HStack
        w="full"
        justifyContent="space-between"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
        >
            <Logo />
            <IconButton 
                icon={<SignOut size={26} color={colors.gray[300]}/>}
            />
        </HStack>
        
        {/* Lista */}
        <VStack flex={1} px={6}>
            {/* HStack = cabeçalho da lista */}
            <HStack w="full" mt={8} mb={4}  justifyContent="space-between" alignItems="center">
                <Heading color="gray.100">
                    Meus chamados
                </Heading>
                <Text color="gray.200">
                    3
                </Text>
            </HStack>
        
        {/* Filtros: Chamados em aberto & Chamados encerrados */}
        <HStack space={3} mb={8}>
            <Filter 
            type='open'
            title='Em andamento'
            />

            <Filter 
            type='closed'
            title='Finalizados'
            />
        </HStack>
        </VStack>
    </VStack>
    
  );
}
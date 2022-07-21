// VStack coloca os elementos um embaixo do outro
// HStack coloca os elementos um ao lado do outro
// IconButton = Botão com ícone do native-base, mantendo as propriedades onPress etc...
// space = semelhante ao gap do css puro. Ele gera um espaçamento entre os elementos
import { FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import Logo from '../assets/logo_primary.svg';
import { Filter } from '../components/Filter';
// importação para usar variáveis de estado no React. Com isso, as alterações
// se refletem em tempo real na aplicação
import { useState } from 'react';


export function Home() {

    // <> = permite passar a tipagem do useState. No caso, ou é "open"
    // ou(|) é "closed". Em seguida, inicia o estado com ('open)
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'> ('open') 

    // estado que contém todas as solicitações
    const [ orders, setOrders] = useState([{
        id: '123',
        patrimony: '123456',
        when: '12/07/2002 às 10:00',
        status: 'open'
    }])

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
            // Evento de click que envia 'open' para o statusSelected (mantém o estado)
            onPress={() => setStatusSelected('open')}
            // Esse filtro será o ativo quando o status for 'open'
            isActive={statusSelected === 'open'}
            />

            <Filter 
            type='closed'
            title='Finalizados'
            // Evento de click que envia 'closed' para o statusSelected (muda o estado)
            onPress={() => setStatusSelected('closed')}
            // Esse filtro será o ativo quando o status for 'closed'. Ou seja,
            // Quando da o click, o status será mudado para closed e, em seguida, esse será o componente ativo.
            // A mesma regra se aplica no filtro anterior, porém, será ativado quando o status for 'open'.
            isActive={statusSelected === 'closed'}


            />
        </HStack>

        {/* flasList (dados que a lista vai carregar). Utilizamos quando queremos exibir vários elementos */}
        <FlatList
        // data ={dados que a lista vai carregar} 
        data={orders}
        // chave que será usada para identificar uma order. Pensando nisso, defini previamente um cmapo "id" no objeto (item) da listagem.
        keyExtractor={item => item.id}
        // exibe(rendezira) o item 
        renderItem={({item}) => <Text color="white"> {item.patrimony} </Text>}
        />
        </VStack>
    </VStack>
    
  );
}
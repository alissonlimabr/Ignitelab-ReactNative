// VStack empilha os elementos na vertical
// bg = cor definida no THEME
// px = padding left + right
// pt = padding top
// mt= margin-top
// mb = margin bottom
// Heading = Elemento usado para textos em destaque
// useTheme = Hoock que dá acesso ao token de cores do tema do projeto
// useState retorna um array com 2 posições. Na 1º, retorna o estado. NA seguda, retorna a função que atualiza esse estado
import { Heading, Icon, VStack, useTheme } from 'native-base';
import { Input } from '../components/Input';
import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';
// Importação para utilização de variáveis de estado no React
import { useState } from 'react';
// Importa a imagem svg para ser usado como um component
import Logo from '../assets/logo_primary.svg';

export function SignIn() {

    // useState inicia com um valor vazio.
    // name = valor
    // setname = função que atualiza o name
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSignIn() {
        console.log(email, password);
    }

    // Extrai as cores do tema do projeto para um objeto, por meio do useTheme();
    const {colors} = useTheme();

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

            <Logo />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input 
            placeholder="E-mail"
            mb={4}

            // cria um elemento à esquerda (ícone). Atribui o modelo (envelope), em seguida, estiliza por meio
            // da propriedade color, acessa o objeto com todas as cores do tema e seleciona gray[700]
            // A sintaxe é: colors={objetoHook.cor[numeração definida]}
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} /> } ml={4} />}
            
            // onChangeText = propriedade do input que escuta o que foi digitado e passa para para uma função.
            onChangeText={setEmail}
            />

            <Input 
            placeholder="Senha"
            mb={4}
            InputLeftElement={<Icon as={<Key color={colors.gray[300]} /> } ml={4} />}
            // Propriedade que oculta os caracteres digitados pelo usuário
            secureTextEntry

            onChangeText={setPassword}

            />

            <Button title={"Entrar"} w="full" 
            
            // Propriedade de evento do Button. Envia para a função handSignIn os valores do input.
            onPress={handleSignIn}
            />

        </VStack>
    )
}
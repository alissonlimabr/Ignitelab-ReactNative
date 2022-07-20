// VStack empilha os elementos na vertical
// bg = cor definida no THEME
// px = padding left + right
// pt = padding top
// mt= margin-top
// mb = margin bottom
// Heading = Elemento usado para textos em destaque
// useTheme = Hoock que dá acesso ao token de cores do tema do projeto
import { Heading, Icon, VStack, useTheme } from 'native-base';
import { Input } from '../components/Input';
// Importa a imagem svg para ser usado como um component
import Logo from '../assets/logo_primary.svg';
import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';

export function SignIn() {

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
            />

            <Input 
            placeholder="Senha"
            mb={4}
            InputLeftElement={<Icon as={<Key color={colors.gray[300]} /> } ml={4} />}
            // Propriedade que oculta os caracteres digitados pelo usuário
            secureTextEntry
            />

            <Button title={"Entrar"} w="full" />

        </VStack>
    )
}
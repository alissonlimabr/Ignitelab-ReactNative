// VStack empilha os elementos na vertical
// bg = cor definida no THEME
// px = padding left + right
// pt = padding top
// mt= margin-top
// mb = margin bottom
// Heading = Elemento usado para textos em destaque
import { Heading, Icon, VStack } from 'native-base';
import { Input } from '../components/Input';
// Importa a imagem svg para ser usado como um component
import Logo from '../assets/logo_primary.svg';
import { Envelope, Key } from 'phosphor-react-native';

export function SignIn() {

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

            <Logo />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input 
            placeholder="E-mail"
            mb={4}
            InputLeftElement={<Icon as={<Envelope />} />}
            />
            <Input placeholder="Senha"/>

        </VStack>
    )
}
// StatusBar = Barra de status do celular
// light-content = deixa os ícones com a cor branca
// backgroundColor = transparent = Faz com que a cor de fundo seja transparente (melhor combinado com o translucent para manter a cor do app)
// translucent = faz com que a aplicação comece do canto da tela para baixo

import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {

  // variável que retorna um boolean do carregamento das fontes.
  const [isfontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    // Biblioteca de estlização NativeBased. É necessário que componentes devem estar envoltos nele, 
    // para aplicar a estilização.
    <NativeBaseProvider theme={THEME}>
      
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent      
        />

      {/* Adiciona if ternário para verificar se as fontes
      foram carregadas. Caso sim, executa o component, caso não,
      executa o Loading(carregamento da fonte) */}
      
      { isfontsLoaded ? <Home /> : <Loading />}

  </NativeBaseProvider>

  );
}

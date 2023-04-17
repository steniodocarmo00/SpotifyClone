import { Text, View, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Inter_400Regular, Inter_800ExtraBold } from '@expo-google-fonts/inter'

import { THEME } from './src/theme';
import { SignIn } from '@screens/SignIn';
import { Signup } from '@screens/Signup';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_800ExtraBold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor='transparent'
        translucent 
      />
      {fontsLoaded ? <Signup /> : <View />}
    </NativeBaseProvider>
  );
}

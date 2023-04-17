import { Text, View, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Inter_400Regular, Inter_800ExtraBold } from '@expo-google-fonts/inter'

import { SignIn } from '@screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_800ExtraBold});

  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor='transparent'
        translucent 
      />
      {fontsLoaded ? <SignIn /> : <View />}
    </NativeBaseProvider>
  );
}

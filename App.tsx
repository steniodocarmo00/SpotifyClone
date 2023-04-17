import { Text, View, StatusBar } from 'react-native';

import { useFonts, Inter_400Regular, Inter_800ExtraBold } from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_800ExtraBold});

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1E1E1E'}} >
      <StatusBar 
        barStyle="light-content" 
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Text>Hello World!</Text> : <View />}
    </View>
  );
}

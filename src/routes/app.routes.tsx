import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { MusicPlayer } from '@screens/MusicPlayer';
import { AlbumView } from '@screens/AlbumView'

type AppRoutes = {
  home: undefined;
  musicPlayer: undefined;
  albumView: undefined;
}

export type NavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown : false }}>
      
      <Screen 
        name='home'
        component={Home}
      />

      <Screen 
        name='musicPlayer'
        component={MusicPlayer}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'modal'
        }}
      />

      <Screen 
        name='albumView'
        component={AlbumView} 
      />
      
    </Navigator>
  )
};
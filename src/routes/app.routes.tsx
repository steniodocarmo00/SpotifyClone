import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';
import { Home } from '@screens/Home';
import { MusicPlayer } from '@screens/MusicPlayer';
import { AlbumView } from '@screens/AlbumView'
import { SplashScreen } from '@screens/SplashScreen';

type AppRoutes = {
  signIn: undefined;
  signUp: undefined;
  Home: undefined;
  MusicPlayer: undefined;
  AlbumView: undefined;
  SplashScreen: undefined
}

export type NavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown : false }}>

      <Screen 
        name='SplashScreen'
        component={SplashScreen}
      />
      
      <Screen 
        name='signIn'
        component={SignIn}
      />

      <Screen 
        name='signUp'
        component={SignUp}
      />
      
      <Screen 
        name='Home'
        component={Home}
      />

      <Screen 
        name='MusicPlayer'
        component={MusicPlayer}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'modal'
        }}
      />

      <Screen 
        name='AlbumView'
        component={AlbumView} 
      />
      
    </Navigator>
  )
};
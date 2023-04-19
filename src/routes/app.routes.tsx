import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';
import { Home } from '@screens/Home';
import { MusicPlayer } from '@screens/MusicPlayer';

type AppRoutes = {
  signIn: undefined;
  signUp: undefined;
  Home: undefined;
  MusicPlayer: undefined;
}

export type NavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown : false }}>
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
      />
      
    </Navigator>
  )
}
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/Signup';
import { SplashScreen } from '@screens/SplashScreen';

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
  splashScreen: undefined
}

export type NavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes(){
  return(
    <Navigator screenOptions={{ headerShown : false }}>

      <Screen 
        name='splashScreen'
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
      
    </Navigator>
  )
};
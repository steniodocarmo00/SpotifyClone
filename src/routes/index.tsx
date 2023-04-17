import {  Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

export function Routes(){

    const theme = DefaultTheme;
    theme.colors.background = '#000000'

  return(
    <Box flex={1} bg='codgray.950'>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
    
  )
}
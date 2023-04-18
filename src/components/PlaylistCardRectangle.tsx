import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Image, Text } from "native-base";

import Icon from '@assets/playlistIcon.png';

type Props = TouchableOpacityProps 

export function PlaylistCardRectangle({...rest}: Props){
  return(
    <TouchableOpacity {...rest}>
      <HStack alignItems='center' backgroundColor='alto.300' mr={2} mb={5}>
        <Text color='#000000' fontFamily='Inter_400Regular' fontSize='lg' ml={2}>
          Texto
        </Text>

        <Image 
          source={Icon}
          alt="Playlist Icon"
          h={11}
          w={11}
          ml={20}
        />
      </HStack>
    </TouchableOpacity>
  )
}
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Image, Text, VStack, Center } from "native-base";

import Icon from '@assets/playlistIcon.png';

type Props = TouchableOpacityProps 

export function PlaylistCardSquare({...rest}: Props){
  return(
    <TouchableOpacity {...rest}>
        <HStack alignItems='center'>
          <VStack ml={6}>
            <Image 
              source={Icon}
              alt="Playlist Icon"
              h={24}
              w={24}
              mb={4}
            />
          
            <Text color='white' fontSize='md' mb={5}>
              Texto
            </Text>
          </VStack>
        </HStack>
      
    </TouchableOpacity>
  )
}
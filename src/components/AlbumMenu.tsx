import { HStack, Icon } from "native-base";

import { Ionicons } from '@expo/vector-icons';

export function AlbumMenu(){
  return(
    <HStack mt={6} ml={4} alignItems='center'>
      <Icon 
        as={Ionicons}
        name='heart-outline'
        color='white'
        size={8}
        mr={6}
      />

      <Icon 
        as={Ionicons}
        name='arrow-down-circle-outline'
        color='white'
        size={8}
        mr={40}
      />

      <Icon 
        as={Ionicons}
        name='shuffle-outline'
        color='white'
        size={8}
        mr={6}
      />

      
      <Icon 
        as={Ionicons}
        name='play-circle-sharp'
        color='green.500'
        size={16}
      />
      
    </HStack>
  )
}
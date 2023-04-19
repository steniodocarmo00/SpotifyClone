import { VStack, HStack, Image, Text, Icon } from "native-base";

import { Ionicons } from '@expo/vector-icons'

export function MusicItem(){
  return(
    <HStack ml={4} mt={4} alignItems='center'>
      <VStack mr={32}>
        <Text color='white' fontFamily='body' fontSize='sm'>
          Caneta Azul Remastered 2009
        </Text>

        <Text color='alto.300' fontFamily='body' fontSize='xs'>
          Fabio VIREI CANIBAL
        </Text>
      </VStack>
      
      <Icon 
        as={Ionicons}
        name='md-ellipsis-vertical'
        color='alto.300'
        size={6}
      />

    </HStack>
  )
  }
import { VStack, HStack, Text, Image } from 'native-base';

import PlaylistIcon from '@assets/playlistIcon.png';

export function ArtistName(){
  return(
  <HStack alignItems='center'>
    <Image 
      source={PlaylistIcon}
      alt="Icone do artista"
      w={4}
      h={4}
      rounded={10}
      ml={4}
      mr={2}
    />
        
    <VStack alignItems='center'>
      <Text color='white' fontSize='xs' fontFamily='bodybold'>
        Fábio VIREI CANIBAL
      </Text>

    </VStack>
  </HStack>
  )
}
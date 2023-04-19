import { VStack, HStack, Text, Image } from 'native-base';

type Props = {
  ArtistName: string;
}

export function ArtistName({ArtistName}: Props){
  return(
  <HStack alignItems='center'>
    <Image 
      source={{uri: 'https://i.scdn.co/image/ab67616d0000b273d491c823e85c89df4e75d7fe'}}
      alt="Icone do artista"
      w={4}
      h={4}
      rounded={10}
      ml={4}
      mr={2}
    />
        
    <VStack alignItems='center'>
      <Text color='white' fontSize='xs' fontFamily='bodybold'>
        {ArtistName}
      </Text>

    </VStack>
  </HStack>
  )
}
import { VStack, HStack, Text, Icon, Slider } from "native-base"

import { Ionicons } from '@expo/vector-icons'

type Props = {
  ArtistName: string;
  MusicName: string;
}

export function MusicPlayerMenu({ArtistName, MusicName}: Props){
  return(
    <VStack>

      <HStack alignItems="center">
        <VStack>
          <Text color="white" fontSize="xl" fontFamily="bodybold" ml={8}>
            {MusicName}
          </Text>

          <Text color="alto.300" fontSize="md" fontFamily="body" ml={8}>
            {ArtistName}
          </Text>
        </VStack>

        <Icon
          as={Ionicons}
          name="heart"
          color="green.500"
          size={6}
          marginLeft={48}
        />
      </HStack>

      <Slider w={81} ml={8} mt={4} colorScheme="dark">
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>

      <HStack mt={4} ml={6} mb={9}>
        <Icon
          as={Ionicons}
          name="shuffle-outline"
          color="white"
          size={8}
          mr={10}
        />

        <Icon
          as={Ionicons}
          name="md-play-skip-back"
          color="white"
          size={8}
          mr={12}
        />

        <Icon
          as={Ionicons}
          name="md-play-circle-outline"
          color="white"
          size={10}
          mr={12}
        />

        <Icon
          as={Ionicons}
          name="md-play-skip-forward"
          color="white"
          size={8}
          mr={10}
        />

        <Icon 
          as={Ionicons} 
          name="repeat" 
          color="white" 
          size={8} 
        />
        </HStack>
    </VStack>
  )
}
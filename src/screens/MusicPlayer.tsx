import { VStack, Center, Text, Image, HStack, Icon, Slider, ScrollView } from "native-base";
import { NavigatorRoutesProps } from '@routes/app.routes';
import { useNavigation } from "@react-navigation/native";

import PlaylistIcon from '@assets/playlistIcon.png'
import { Ionicons } from '@expo/vector-icons'

import { MusicPlayerHeader } from "@components/MusicPlayerHeader";
import { LyricsCard } from "@components/LyricsCard";

export function MusicPlayer(){
  const navigation = useNavigation<NavigatorRoutesProps>();

  function musicPlayerDown(){
    navigation.goBack()
  }

  return(
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <MusicPlayerHeader onPress={musicPlayerDown}/>
        <Center>
          <Image 
          source={PlaylistIcon}
          alt="Playlist Icon"
          h={80}    
          w={80}
          mb={20}
          />
        </Center>
        <HStack alignItems='center'>
          <VStack>
          <Text color='white' fontSize='xl' fontFamily='bodybold' ml={8}>Nome da música</Text>
          <Text color='alto.300' fontSize='md' fontFamily='body' ml={8}>Artista</Text>
          </VStack>
            
          <Icon 
          as={Ionicons}
          name='heart'
          color='green.500'
          size={6}
          left={32} 
          />
        </HStack>

        <Slider w={81} ml={8} mt={4} colorScheme='dark'>
          <Slider.Track>
          <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>

        <HStack mt={4} ml={6} mb={9}>
          <Icon 
          as={Ionicons}
          name='shuffle-outline'
          color='white'
          size={8}
          mr={10}
          />

          <Icon 
          as={Ionicons}
          name='md-play-skip-back'
          color='white'
          size={8}
          mr={12}
          />

          <Icon 
          as={Ionicons}
          name='md-play-circle-outline'
          color='white'
          size={10}
          mr={12}
          />

          <Icon 
          as={Ionicons}
          name='md-play-skip-forward'
          color='white'
          size={8}
          mr={10}
          />

          <Icon 
          as={Ionicons}
          name='repeat'
          color='white'
          size={8}
          />
        </HStack>

        <LyricsCard />

      </VStack>
    </ScrollView>
  )
}
import { VStack, HStack, Text, Image, Center, ScrollView, Icon, Pressable } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { NavigatorRoutesProps } from '@routes/app.routes'

import PlaylistIcon from '@assets/playlistIcon.png'
import { Ionicons } from '@expo/vector-icons'

import { ArtistName } from '@components/ArtistName';
import { AlbumMenu } from '@components/AlbumMenu';
import { MusicItem } from '@components/MusicItem';

export function AlbumView(){
  const navigation = useNavigation<NavigatorRoutesProps>();

  function handleGoBack(){
    navigation.navigate('home');
  }

  return(
    <ScrollView>
    
    <VStack flex={1}>
      <Pressable mt={16} w={10} h={10} ml={4}>
        <Icon 
          as={Ionicons}
          name='arrow-back'
          color='white'
          size={6}
          onPress={handleGoBack}
        />
      </Pressable>

      <Center>
        <Image
          source={PlaylistIcon}
          alt="Icone de Album"
          w={56}
          h={56}
          mb={4}
        />
      </Center>
      <Text color='white' fontSize='xl2' fontFamily='heading' mb={4} ml={4} mr={4}>
        Virei Canibal Remix
      </Text>

      <ArtistName />

      <AlbumMenu />

      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem />
    
    </VStack>
    </ScrollView>

  )
}
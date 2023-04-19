import { HStack, VStack, Center,Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { NavigatorRoutesProps } from '@routes/app.routes';

import { ScrollView } from 'native-base';
import { PlaylistCardRectangle } from '@components/PlaylistCardRectangle';
import { PlaylistCardSquare } from '@components/PlaylistCardSquare';
import { MiniPlayer } from '@components/MiniPlayer';

export function Home(){
  const navigation = useNavigation<NavigatorRoutesProps>();
  
  function musicPlayerUp(){
    navigation.navigate('musicPlayer')
  }

  return(
    <ScrollView>
      <VStack flex={1}>
      <Text color='white' mt={12} ml={2} fontFamily='heading' fontSize='xl'>
        Bem vindo
      </Text>

      <Center>
        <HStack mt={8}>
          <PlaylistCardRectangle PlaylistName='Idioma Morto' PlaylistImage='https://i.scdn.co/image/ab67616d0000b273717ae1ffacd3c8454580cacf'/>
          <PlaylistCardRectangle PlaylistName='Cute Tragedies' PlaylistImage='https://i.scdn.co/image/ab67616d0000b27393b7cdb0ad71bf665a0e4e0d'/>
        </HStack>

        <HStack>
          <PlaylistCardRectangle PlaylistName='Issues' PlaylistImage='https://i.scdn.co/image/ab67616d0000b2731c229cb7c9851fb0c67e2af8'/>
          <PlaylistCardRectangle PlaylistName='Sal Grosso' PlaylistImage='https://i.scdn.co/image/ab67616d00001e02eb78d248ece9d992a620d203'/>
        </HStack>

        <HStack>
          <PlaylistCardRectangle PlaylistName='Paranoid' PlaylistImage='https://i.scdn.co/image/ab67616d0000b273d5fccf9ce08b6a1e7d12a222'/>
          <PlaylistCardRectangle PlaylistName='Rebirth' PlaylistImage='https://i.scdn.co/image/ab67616d0000b2733c2f7e176c7aaf11b71d04b1'/>
        </HStack>
      </Center>

      <Text color='white' mt={16} mb={3} ml={2} fontFamily='heading' fontSize='xl'>
        Tocados recentemente
      </Text>
      
      <HStack>
        <PlaylistCardSquare PlaylistName='Rock' PlaylistImage='https://i.scdn.co/image/ab67706f00000002412cfd41ea0a8808a68d2b07'/>
        <PlaylistCardSquare PlaylistName='LoFi Beats' PlaylistImage='https://e.snmc.io/i/600/s/12c6f3ad43494170e63b15f6588e3341/8723712'/>
        <PlaylistCardSquare PlaylistName='This is SOAD' PlaylistImage='https://thisis-images.scdn.co/37i9dQZF1DZ06evO34PI4g-default.jpg'/>
      </HStack>

      <Text color='white' mb={3} ml={2} fontFamily='heading' fontSize='xl'>
        Top 50 da semana
      </Text>

      <HStack>
        <PlaylistCardSquare PlaylistName='Mundo' PlaylistImage='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg'/>
        <PlaylistCardSquare PlaylistName='Brasil' PlaylistImage='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_default.jpg'/>
        <PlaylistCardSquare PlaylistName='USA' PlaylistImage='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg'/>
      </HStack>

      <MiniPlayer onPress={musicPlayerUp}/>

    </VStack>
    </ScrollView>
    
  )
}
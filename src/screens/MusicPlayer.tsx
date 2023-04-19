import { VStack, Center, Text, Image, HStack, Icon, Slider, ScrollView, } from 'native-base';
import { NavigatorRoutesProps } from '@routes/app.routes';
import { useNavigation } from '@react-navigation/native';

import { MusicPlayerHeader } from '@components/MusicPlayerHeader';
import { LyricsCard } from '@components/LyricsCard';
import { MusicPlayerMenu } from '@components/MusicPlayerMenu';

export function MusicPlayer() {
  const navigation = useNavigation<NavigatorRoutesProps>();

  function musicPlayerDown() {
    navigation.goBack();
  }

  function musicPlayerAlbum() {
    navigation.navigate("albumView");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <MusicPlayerHeader
          iconButtonOnPress={musicPlayerDown}
          pressableOnPress={musicPlayerAlbum}
        />
        <Center>
          <Image
            source={{uri: 'https://i.scdn.co/image/ab67616d0000b273d491c823e85c89df4e75d7fe'}}
            alt="Playlist Icon"
            h={80}
            w={80}
            mb={20}
          />
        </Center>

        <MusicPlayerMenu
          ArtistName='Astrophysics'
          MusicName='Malfunction'
        />
        
        <LyricsCard />
      </VStack>
    </ScrollView>
  );
}

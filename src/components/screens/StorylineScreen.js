import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import globalStyles from '../../styles/globalStyles';

const StorylineScreen = () => (
  <ScrollView contentContainerStyle={globalStyles.page}>
    <Text style={globalStyles.pageTitle}>Storyline</Text>
    <Text style={globalStyles.text}>
      Xiao, also known as the Vigilant Yaksha, is one of the mighty and 
      illuminated adepti of Liyue. He currently resides in Wangshu Inn, 
      where he vigilantly maintains watch over all evils that threaten the land.
      As the sole surviving Yaksha, he continues to honor his contract with Rex 
      Lapis and defend Liyue, though the karma of his violent past still torments him.
    </Text>
    <Image
      source={require('../../assets/images/xiao.png')}
      style={globalStyles.storyImage}
    />
  </ScrollView>
);

export default StorylineScreen;
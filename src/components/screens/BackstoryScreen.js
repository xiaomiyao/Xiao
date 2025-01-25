import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import globalStyles from '../../styles/globalStyles';

const BackstoryScreen = () => (
  <ScrollView contentContainerStyle={globalStyles.page}>
    <Text style={globalStyles.pageTitle}>Backstory</Text>
    <Text style={globalStyles.text}>
      Thousands of years ago, Xiao was a nameless enslaved god under a cruel 
      master. He was freed by Rex Lapis, who gave him the name "Xiao" and 
      enlisted him as one of the Yaksha to defend Liyue. Along with his fellow 
      Yaksha warriors, he fought against the darkness that plagued the land, 
      though this came at a great personal cost.
    </Text>
    <Image
      source={require('../../assets/images/xiao.png')}
      style={globalStyles.storyImage}
    />
  </ScrollView>
);

export default BackstoryScreen;
import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import globalStyles from '../../styles/globalStyles';

const SkillsScreen = () => (
  <ScrollView contentContainerStyle={globalStyles.page}>
    <Text style={globalStyles.pageTitle}>Combat Skills</Text>
    <View style={globalStyles.skillContainer}>
      <Text style={globalStyles.skillTitle}>Whirlwind Thrust</Text>
      <Text style={globalStyles.text}>
        Performs a high-speed thrust attack that deals Anemo DMG to opponents 
        along the path.
      </Text>
      <Image
        source={require('../../assets/images/skill1.png')}
        style={globalStyles.skillImage}
      />
    </View>
    {/* Add more skills here */}
  </ScrollView>
);

export default SkillsScreen;
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import globalStyles from '../../styles/globalStyles';
import { COLORS } from '../../constants/theme';

const HomeScreen = ({ navigation }) => (
  <ImageBackground
    source={require('../../assets/images/background.jpg')}
    style={globalStyles.background}
  >
    <View style={globalStyles.container}>
      <Image
        source={require('../../assets/images/xiao.png')}
        style={globalStyles.image}
      />
      <Text style={globalStyles.title}>Xiao</Text>
      <Text style={globalStyles.subtitle}>The Vigilant Yaksha</Text>
      {['Storyline', 'Skills', 'Backstory'].map((screen) => (
        <TouchableOpacity
          key={screen}
          style={globalStyles.button}
          onPress={() => navigation.navigate(screen)}
        >
          <Text style={globalStyles.buttonText}>{screen}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </ImageBackground>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
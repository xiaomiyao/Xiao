import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, AppState, Dimensions, Button, Image, TouchableOpacity, ScrollView, ImageBackground, ActivityIndicator } from 'react-native';
import InventoryList from './components/InventoryList';
import AddItemInput from './components/AddItemInput';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Progress from 'react-native-progress';

const Stack = createStackNavigator();

// Loading component for displaying a loading spinner
const Loading = () => {
  return (
    <View style={styles.loadingContainer}> {/* Added centralized styles */}
      <ActivityIndicator size="large" color="#97d5d3" />
    </View>
  );
};

// HomeScreen component with navigation buttons
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/33/43/9d/33439df9a6b082be380560d9e61b38ed.jpg',
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Xiao</Text>
        <Text style={styles.subtitle}>The Vigilant Yaksha</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Storyline')} // Removed unnecessary loading prop
        >
          <Text style={styles.buttonText}>Storyline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Skills')} // Removed unnecessary loading prop
        >
          <Text style={styles.buttonText}>Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Backstory')} // Removed unnecessary loading prop
        >
          <Text style={styles.buttonText}>Backstory</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// StorylineScreen component displaying character story
const StorylineScreen = () => (
  <ScrollView contentContainerStyle={styles.page}>
    <Text style={styles.pageTitle}>Storyline</Text>
    <Text style={styles.text}>
      Xiao, also known as the Vigilant Yaksha, is one of the adepti protecting
      Liyue. Despite his cold demeanor, he is devoted to safeguarding the city
      from dark forces.
    </Text>
    <Image
      source={{
        uri: 'https://images6.alphacoders.com/102/1029096.jpg',
      }}
      style={styles.storyImage}
    />
  </ScrollView>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Storyline" component={StorylineScreen} />
        {/* Add other screens like Skills and Backstory here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Stylesheet for the app
const styles = StyleSheet.create({
  loadingContainer: { // Fixed loading container style
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  page: {
    padding: 20,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
  },
  storyImage: {
    marginTop: 20,
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});

export default App;

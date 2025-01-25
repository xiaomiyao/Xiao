import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import StorylineScreen from './components/screens/StorylineScreen';
import SkillsScreen from './components/screens/SkillsScreen';
import BackstoryScreen from './components/screens/BackstoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator 
       initialRouteName="Home"
       screenOptions={{
         headerStyle: {
           backgroundColor: '#121212',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
       }}
     >
       <Stack.Screen 
         name="Home" 
         component={HomeScreen}
         options={{ headerShown: false }}
       />
       <Stack.Screen name="Storyline" component={StorylineScreen} />
       <Stack.Screen name="Skills" component={SkillsScreen} />
       <Stack.Screen name="Backstory" component={BackstoryScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
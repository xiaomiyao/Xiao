import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/screens/HomeScreen';
import StorylineScreen from '../components/screens/StorylineScreen';
import SkillsScreen from '../components/screens/SkillsScreen';
import BackstoryScreen from '../components/screens/BackstoryScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Storyline" component={StorylineScreen} />
      <Stack.Screen name="Skills" component={SkillsScreen} />
      <Stack.Screen name="Backstory" component={BackstoryScreen} />
    </Stack.Navigator>
  );
}
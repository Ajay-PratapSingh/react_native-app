import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Home from './screens/home';

const Stack = createStackNavigator();


const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login}/>
      <Stack.Screen name="home" component={Home}/>
    </Stack.Navigator>
  )
};

export default AppNavigator;
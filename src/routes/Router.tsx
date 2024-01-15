import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login/Login';

const Stack = createNativeStackNavigator();

export const NavigationApp = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login' screenOptions={{ headerTransparent:true, statusBarHidden:true, title: null }}>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="login" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
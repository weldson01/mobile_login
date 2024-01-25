import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login/Login';
import { Home } from '../screens/Home/Home';
import { Postagem } from '../screens/Postagem/Postagem';
import { EditPost } from '../screens/EditPost/EditPost';
import { SignUp } from '../screens/SignUp/SignUp';

export const Stack = createNativeStackNavigator();

export const NavigationApp = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login' screenOptions={{ headerTransparent:true, statusBarHidden:true, title: null, headerBackVisible:false }}>
                <Stack.Screen name="home" component={Home}/>
                <Stack.Screen name="login" component={Login}/>
                <Stack.Screen name="post" component={Postagem}/>
                <Stack.Screen name="editPost" component={EditPost}/>
                <Stack.Screen name="signUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
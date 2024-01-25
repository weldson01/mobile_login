import { useEffect, useState } from "react"
import { Text, Alert } from "react-native"
import { ILoginServiceReturn, loginService } from "../../services/api"
import { useNavigation } from "@react-navigation/native"
import { ActionsArea, Form, ImageBackgroundS, ImageS, ScreenHome, TextHome, TextInputS, TouchableS } from "./components"
import { getUser, saveUser } from "../../services/userReturnService"


export const Login = ()=>{
    const [email, setEmail] = useState("w");
    const [password, setPassword] = useState("a");
    // @ts-ignore
    const [user, setUser] = useState<ILoginServiceReturn>("");
    const [userS, setUserS] = useState("");

    const navigation = useNavigation();
    
    async function checkUser(){
        const userAsync = await getUser();

        if(userAsync.id){
            // @ts-ignore
            navigation.navigate("home");
        }
    }
    useEffect(()=>{
        checkUser();
    },[]);

     async function handleSubmit(e){
        const response = await loginService({email,password});
        // console.log(response);
        setUser(response)
        if(response.id != undefined){
            saveUser(response);
            // @ts-ignore 
            navigation.navigate("home");
        }else{
            Alert.alert("Error", "Your acount is not found! try again!");
        }

    }   
    return (
    <ScreenHome>
        <ImageBackgroundS source={require("../../assets/login/background-login.jpg")}>
            <Form>
                <ImageS source={require("../../assets/login/Perfil-no-photo.jpg")}/>
                <TextHome>Welcome!</TextHome>
                <TextInputS placeholder="Digite seu email" onChangeText={setEmail}/>
                <TextInputS placeholder="Digite sua senha" secureTextEntry={true} onChangeText={setPassword}/>
                <ActionsArea>
                    <TouchableS onPress={handleSubmit}>
                        <Text style={{fontSize:24, color: "#fff"}}>Login</Text>
                    </TouchableS>
                    <TouchableS onPress={handleSubmit} style={{backgroundColor:"rgba(255,255,255,0)"}}>
                        <Text style={{fontSize:24, color: "#fff"}}>Criar conta</Text>
                    </TouchableS>
                </ActionsArea>
            </Form>
        </ImageBackgroundS>
    </ScreenHome>)
}

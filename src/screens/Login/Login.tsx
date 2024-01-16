import { useState } from "react"
import { Text } from "react-native"
import { ILoginServiceReturn, loginService } from "../../services/api"
import { useNavigation } from "@react-navigation/native"
import { Form, ImageBackgroundS, ImageS, ScreenHome, TextHome, TextInputS, TextLabel, TouchableS } from "./components"


export const Login = ()=>{
    const [email, setEmail] = useState("w");
    const [password, setPassword] = useState("a");
    // @ts-ignore
    const [user, setUser] = useState<ILoginServiceReturn>("");
    const navigation = useNavigation();

     async function handleSubmit(e){
        const response = await loginService({email,password});
        // console.log(response);
        setUser(response)
        if(response){
            // @ts-ignore 
            navigation.navigate("home");
        }else{
            alert("try again!");
        }

    }   

    return (
    <ScreenHome>
        <ImageBackgroundS source={require("../../assets/login/background-login.jpg")}>
            <Form>
                <Text>
                {user?.name}
                </Text>
                <ImageS source={require("../../assets/login/Perfil-no-photo.jpg")}/>
                <TextHome>Welcome!</TextHome>
                <TextLabel>Email:</TextLabel>
                <TextInputS placeholder="Digite seu email" onChangeText={setEmail}/>
                <TextLabel>Senha:</TextLabel>
                <TextInputS placeholder="Digite sua senha" secureTextEntry={true} onChangeText={setPassword}/>
                <TouchableS style={{borderRadius: 10}} onPress={handleSubmit}>
                    <Text style={{fontSize:24, color: "#fff"}}>Login</Text>
                </TouchableS>
            </Form>
        </ImageBackgroundS>
    </ScreenHome>)
}

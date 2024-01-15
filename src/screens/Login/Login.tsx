import { Text,  ImageBackground, Image } from "react-native"
import styled from "styled-components/native"
export const ScreenHome = styled.View`
    flex:1;
    background-color: #0A1931;
    align-items: center;
    justify-content: center;
    gap:10;
    background-image: ""
`
export const ImageBackgroundS = styled.ImageBackground`
    width: 100%;
    height: 100%;
    flex:1;
    align-items:center;
    justify-content: center;
`
export const Form = styled.View`
    width: 80%;
    height: 580px;
    padding: 20px 5px 5px 5px;
`

export const TextHome = styled.Text`
    font-size:32;
    color: #FEDDBE;
    margin-top:16;
    margin-bottom: 32;
    align-self: center;
`
export const TextLabel = styled.Text`
    font-size: 24;
    color: #FEDDBE;
    text-align: center;
`
export const TextInputS = styled.TextInput`
    font-size: 20;
    margin-bottom: 48;
    margin-left:32;
    margin-right:32;
    height: 40;
    padding-left: 12px;
    border-radius: 20px 20px 20px 20px;
    background-color: #f7f7f7;

`
export const TouchableS = styled.TouchableOpacity`
    background-color: #0A1931;
    width: 30%;
    height: 45;
    align-items:center;
    justify-content: center;
    align-self: center;

`
export const ImageS = styled.Image`
    border-radius: 200px 200px 200px 200px;
    height: 150px;
    width: 150px;
    align-self: center;
`

export const Login = ()=>{
    return (
    <ScreenHome>
        <ImageBackgroundS source={require("../../assets/login/background-login.jpg")}>
            <Form>
                <ImageS source={require("../../assets/login/Perfil-no-photo.jpg")}/>
                <TextHome>Welcome!</TextHome>
                <TextLabel>Email:</TextLabel>
                <TextInputS placeholder="Digite seu email"/>
                <TextLabel>Senha:</TextLabel>
                <TextInputS placeholder="Digite sua senha" secureTextEntry={true}/>
                <TouchableS style={{borderRadius: 10}}>
                    <Text style={{fontSize:24, color: "#fff"}}>Login</Text>
                </TouchableS>
            </Form>
        </ImageBackgroundS>
    </ScreenHome>)
}

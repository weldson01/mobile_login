import { Text, TextInput, Touchable, KeyboardAvoidingView } from "react-native"
import styled from "styled-components/native"

export const ScreenHome = styled.View`
    flex:1;
    background-color: #0A1931;
    align-items: center;
    justify-content: center;
    gap:10;
`
export const Form = styled.View`
    background-color: #185ADB;
    width: 80%;
    height: 420;
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
    margin-left:10;
`
export const TextInputS = styled.TextInput`
    font-size: 24;
    color: #FEDDBE;
    margin-bottom: 48;
    margin-left:12;

`
export const TouchableS = styled.TouchableOpacity`
    background-color: #0A1931;
    width: 30%;
    height: 45;
    align-items:center;
    justify-content: center;
    align-self: center;

`


export const Home = ()=>{
    return (
    <ScreenHome>
        <Form style={{borderRadius:20}}>
            <TextHome>Login</TextHome>
            <TextLabel>Email:</TextLabel>
            <TextInputS placeholder="Digite seu email"/>
            <TextLabel>Senha:</TextLabel>
            <TextInputS placeholder="Digite sua senha" secureTextEntry={true}/>
            <TouchableS style={{borderRadius: 10}}>
                <Text style={{fontSize:24, color: "#fff"}}>Login</Text>
            </TouchableS>
        </Form>
    </ScreenHome>)
}

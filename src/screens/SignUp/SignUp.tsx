import { Text, TextInput, View } from "react-native"



export const SignUp = ()=>{
    return(
    <View>
        <Text>Cadastro</Text>
        <Text>Crie sua conta agora.</Text>
        
        <View>
            <Text>Nome:</Text>
            <TextInput placeholder="Digite seu nome"></TextInput>
            <Text>Email:</Text>
            <TextInput placeholder="Digite seu email"></TextInput>
            <Text>Senha:</Text>
            <TextInput placeholder="Digite sua senha"></TextInput>
            <Text>Confirme sua senha:</Text>
            <TextInput placeholder="Digite sua senha novamente"></TextInput>
        </View>
    </View>)
}
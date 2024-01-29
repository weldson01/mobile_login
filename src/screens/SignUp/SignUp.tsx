import styled from "styled-components/native"
import { createUser } from "../../services/api"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"


export const FormContainer = styled.View`
    flex:1;
    background-color: #393E46;
`
export const Form = styled.View`
    align-items:center;
    background-color: #EEEEEE;
    gap: 5px;
    border-radius: 70px 70px 0px 0px;
    padding-top: 100px;
    flex:1;
    shadow-offset: 50px -50px;
    shadow-color: black;
    shadow-opacity: 1;
    elevete: 10px;
`
export const LabelInput = styled.Text`
    font-size: 26px;
    align-self: flex-start;
    margin-left: 45px;
`
export const Input = styled.TextInput`
    width: 300px;
    height: 40px;
    font-size: 24px;
    padding-left: 5px;
`
export const Title = styled.View`
`
export const HeaderText1 = styled.Text`
    font-size: 34px;
    align-self:left;
    left: 35px;
    margin-top: 50px;
    margin-bottom: 2px;
    color: #EEEEEE;
`
export const HeaderText2 = styled.Text`
    font-size: 30px;
    left: 35px;
    margin-top: 5px;
    margin-bottom: 60px;
    color: #EEEEEE;
`
export const ButtonSend = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #FFD369;
    width: 160px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 30px 30px 30px 30px;
    shadow-offSet: 10px 10px;
    shadow-color: #222831;
    elevation: 5;
`
export const ButtonText = styled.Text`
    font-size: 20px;
`

export const SignUp = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassowrd] = useState("");
    const navigation = useNavigation();

    async function handleCreateAccount(){
        if(password != confirmPassword){
            return alert("As senhas devem serem iguais")
        }
        
        const response = await createUser(name,email,password);
        if(response.type == "success"){
            // @ts-ignore
            navigation.navigate("login");
        }
        if(response.type == "error"){
            alert("Não foi possível criar a sua conta, tente novamente.");
        }
    }
    return(
    <FormContainer>
        <Title>
            <HeaderText1>Crie sua</HeaderText1>
            <HeaderText2>conta agora...</HeaderText2>
        </Title>
        <Form>
            <LabelInput>
                Digite seu nome
            </LabelInput>
            <Input placeholder="Well Carl" onChangeText={setName}></Input>
            <LabelInput>
                Digite seu email
            </LabelInput>
            <Input placeholder="well@carl.com" onChangeText={setEmail}></Input>
            <LabelInput>
                 Digite sua senha
            </LabelInput>
            <Input placeholder="********" onChangeText={setPassword} secureTextEntry={true}></Input>
            <LabelInput>
                 Confirme sua senha
            </LabelInput>
            <Input placeholder="********" onChangeText={setConfirmPassowrd} secureTextEntry={true}></Input>
            <ButtonSend onPressOut={handleCreateAccount}>
                <ButtonText>
                    Criar conta
                </ButtonText>
            </ButtonSend>
        </Form>
    </FormContainer>)
}
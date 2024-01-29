import { useNavigation } from "@react-navigation/native";
import { ScrollView,Text, TouchableOpacity } from "react-native"
import styled from "styled-components/native";


export const Container = styled.ScrollView`
    flex:1;
    padding: 0px 10px 10px 20px;
`
export const TitleStyled = styled.Text`
    font-size:24px;
    color: #EEE;
`
export const BodyText = styled.Text`

`



export const text = styled.Text``

export const Postagem = ({route})=>{
    const item = route.params;
    console.log("The props is " + item)
    const navigation = useNavigation();

    function handleEditPost(){
        // @ts-ignore
        navigation.navigate("editPost", {id:item.id, title:item.title, body:item.body});
    }

    return (
    <Container>
        <TitleStyled> 
            {item && item?.title}
        </TitleStyled>
        <BodyText key={0} style={{fontSize:30}}> 
            {item && item?.body}
            
        </BodyText>
        <TouchableOpacity onPress={handleEditPost}>
            <Text>Editar Postagem</Text>
        </TouchableOpacity>
    </Container>)
}
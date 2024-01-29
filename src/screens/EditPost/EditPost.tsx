import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { getUser } from "../../services/userReturnService";
import { useEffect, useState } from "react";
import { putPostService } from "../../services/api";




export const EditPost = ({route,navigation})=>{
    const {id, title, body} = route.params;
    const [token, setToken] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    useEffect(()=>{
        setPostTitle(title);
        setPostBody(body);
    },[])

    async function getToken(){
        const tokenAux = await getUser();
        setToken(tokenAux);

    }
    useEffect(()=>{
        getToken();
    },[])

   async function handleSetPost(){
        const response = await putPostService({id, title: postTitle, body: postBody, token});
        console.log(response);
    }


    return(
        <ScrollView>
            <Text>Título:</Text>
            <TextInput defaultValue={title} value={postTitle} onChangeText={setPostTitle}/>
            
            <Text>Texto:</Text>
            <TextInput defaultValue={body} value={postBody} onChangeText={setPostBody}/>
            <TouchableOpacity onPress={handleSetPost}>
                <Text>Alterar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"


export const Postagem = ({route})=>{
    const item = route.params;
    console.log("The props is " + item)
    const navigation = useNavigation();

    function handleEditPost(){
        // @ts-ignore
        navigation.navigate("editPost", {id:item.id, title:item.title, body:item.body});
    }

    return (<ScrollView>
        <Text key={0} style={{fontSize:30}}> 
            {item && item?.title}
        </Text>
        <Text key={0} style={{fontSize:30}}> 
            {item && item?.body}
        </Text>
        <TouchableOpacity onPress={handleEditPost}>
            <Text>Editar Postagem</Text>
        </TouchableOpacity>
    </ScrollView>)
}
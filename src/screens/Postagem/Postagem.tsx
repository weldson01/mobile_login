import { Text, View } from "react-native"


export const Postagem = ({route,navigation})=>{
    const item = route.params;
    console.log("The props is " + item)
    return (<View>
        <Text key={0} style={{fontSize:30}}> 
            {item && item?.title}
        </Text>
        <Text key={0} style={{fontSize:30}}> 
            {item && item?.body}
        </Text>
    </View>)
}
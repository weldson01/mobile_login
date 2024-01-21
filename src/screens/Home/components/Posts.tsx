import { useNavigation } from "@react-navigation/native"
import {styled} from "styled-components/native"

export const PostsView = styled.FlatList`
    margin-top: 10px;
    background-color: blue;
    height:350px;
    padding-left:20px;
    padding-top: 20px;
`
export const PostItemV = styled.View`
    background-color: cyan;
    min-height: 40px;
    max-height: 500px;
    margin-bottom: 10px;
    padding-bottom: 10px;
`
export const Title = styled.Text`
    font-size: 24px;
    background-color: red;
`
export const Body = styled.Text`
    font-size: 20px;
`

export const Posts = ({data})=>{
    const navigation = useNavigation();
    return (
        <PostsView data={data} keyExtractor={({item})=>item?.id} renderItem={({item})=>{
            return (
                <PostItemV onTouchEnd={()=>{
                    navigation.navigate("post", {title: item?.title, body: item?.body})
                }}>
                    <Title>
                        {item?.title}
                    </Title>
                    <Body>
                        {item?.body}
                    </Body>
                </PostItemV>
            )
        }}/>
    )
}
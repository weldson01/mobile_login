import { useNavigation } from "@react-navigation/native"
import {styled} from "styled-components/native"
import { IpostService } from "../../../services/api"


export const PostsView = styled.FlatList`
    flex:1;
    padding-top: 10px;
    background-color: #EEEEEE;
    padding-top: 20px;
    padding-left:16px;
    padding-right: 12px;
`;
export const PostItemV = styled.View`
    min-height: 100px;
    max-height: 500px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    padding-top: 5px;
    padding-left: 20px;
    border-radius: 30px 30px 30px 30px;
    background-color: #fff;
    shadow-color: rgb(0,0,0);
    shadow-offset: 5px 5px;
    shadow-radius: 20px;
    shadow-opacity: 0.8;
    elevation: 4;
`;
export const Title = styled.Text`
    font-size: 26px;
    margin-bottom:10px;
`;
export const Body = styled.Text`
    font-size: 20px;
`;

export const Posts = ({data})=>{
    const navigation = useNavigation();
    return (
      // @ts-ignore
        <PostsView data={data} keyExtractor={({item}: IpostService)=>item?.id} renderItem={({item}: IpostService)=>{
            return (
                // @ts-ignore
                <PostItemV onTouchEnd={()=>{
                    // @ts-ignore
                    navigation.navigate("post", {id:item.id,title: item?.title, body: item?.body})
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
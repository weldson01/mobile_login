import { useEffect, useState } from "react";
import styled from "styled-components/native"
import { getUser } from "../../services/userReturnService";
import { StatusBar } from "expo-status-bar";
import { IpostService, postService } from "../../services/api";
import { Posts } from "./components/Posts";
import { View } from "react-native";

export const Header = styled.View`
    background-color: red;
    align-items:center;
    justify-content:center;
    height: 75px;
    flex-direction: row;
    justify-content: space-between;
`
export const Title1 = styled.Text`
    color: #fff;
    font-size: 20px;
    align-self: center;
    margin-left: 20px;
`
export const ImageHeader = styled.Image`
    height: 70px;
    width: 70px;
    margin-right: 20px;
    border-radius: 50px;
`

export const Home = ()=>{
    const [user,setUser] = useState();
    const [posts,setPosts] = useState<IpostService[]>([{body:"k",createdAt:"s", title: "ll", updateAt: "221", UserId: 1}]);



    async function findUser(){
        const userAux = await getUser()
        if(userAux){
            setUser(userAux)
        }
    }
    async function findPosts(){
        const postsAux = await postService()
        if(postsAux){
            setPosts(postsAux);
        }
    }

    useEffect(()=>{
        findUser();
        findPosts();
    },[])
    return(
        <>
        <StatusBar />
        <Header>
            <Title1>Bem-vindo, {user?.name}</Title1>
            <ImageHeader source={require("../../assets/login/Perfil-no-photo.jpg")}></ImageHeader>
        </Header>
            <Posts data={posts} />
        </>
    )
}
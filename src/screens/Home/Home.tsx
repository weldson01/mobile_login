import { useEffect, useState } from "react";
import styled from "styled-components/native"
import { getUser } from "../../services/userReturnService";
import { StatusBar } from "expo-status-bar";
import { IpostService, postService } from "../../services/api";
import { Posts } from "./components/Posts";
import { BtnCreatePost } from "./components/BtnCreatePost";

export const Header = styled.View`
    background-color: #222831;
    align-items:center;
    justify-content:center;
    height: 75px;
    flex-direction: row;
    justify-content: space-between;
`
export const Title1 = styled.Text`
    color: #EEEEEE;
    font-size: 20px;
    align-self: center;
    margin-left: 20px;
`
export const ImageHeader = styled.Image`
    height: 60px;
    width: 60px;
    margin-right: 30px;
    border-radius: 50px;
`

export const Home = ()=>{
    const [user,setUser] = useState<any>();
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
            <BtnCreatePost />
        </>
    )
}
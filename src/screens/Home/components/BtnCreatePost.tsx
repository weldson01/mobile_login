import styled from "styled-components/native"

export const BtnView = styled.View`
    height: 80px;
    width: 80px;
    align-self: center;
    border-radius: 50px 50px 50px 50px;
    background-color: #222831;
    align-items:center;
    justify-content: center;
    top:-50px;
    border: 5px #EEEEEE;
`
export const BtnText = styled.Text`
    color: #EEE;
    font-size: 50px;
    text-align:center;
`

export const Footer = styled.View`
    height: 75px;
    width: 100%;
    background-color: #FFD369;
`
export const BtnCreatePost = ()=>{

    return(
        <Footer>
                <BtnView>
                    <BtnText>
                        +
                    </BtnText>
                </BtnView> 
        </Footer>
    )

}
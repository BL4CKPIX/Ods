import styled, {createGlobalStyle} from "styled-components";
import {BsFillPeopleFill} from 'react-icons/bs'
import {GiModernCity, GiLifeTap, GiClassicalKnowledge, GiPayMoney} from 'react-icons/gi'
import {IoEarthOutline} from 'react-icons/io5'
import {RiGovernmentLine} from 'react-icons/ri'
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const ContainerOds = styled.section`
    display: flex;
    a{
        text-decoration: none;
        color: white;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        height: 50vh;
    }
`

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-align: center;
    height: 20vh;
`

export const H3 = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    h3{
        width: 70%;
        font-size: 1.5rem;
        text-align: justify;
        
    }
    @media (max-width: 768px){
        height: 90vh;
    }
`

export const Logo = styled.img`
    width: 10%;
    @media (max-width: 768px){
        width: 40%;
    }
`

export const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        height: 300vh;
        justify-content: space-around;
    }
`

export const DivOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #F5A836;
    width: 20%;
    height: 35vh;
    border-radius: 5%;
    div{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
        h2{
            font-size: 3rem;
            color: white;
            width: 20%;
        }
        p{
            width: 95%;
            text-align: center;
            font-size: 1.2rem;
            color: white;
            font-weight: 600;
        }
    }
    @media (max-width: 768px){
        width: 60%;
        height: 30vh;
    }
`
export const pzinho = styled.p`
    text-align: left;
    width: 20%;
`

export const iconOne = styled(BsFillPeopleFill)`
    font-size: 4rem;
    color:white;
`



export const DivTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #E2672D;
    width: 20%;
    height: 35vh;
    border-radius: 5%;
    div{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
        h2{
            font-size: 3rem;
            color: white;
            width: 20%;
        }
        p{
            width: 95%;
            text-align: center;
            font-size: 1.2rem;
            color: white;
            font-weight: 600;
        }
    }
    @media (max-width: 768px){
        width: 60%;
        height: 30vh;
    }
`
export const iconTwo = styled(GiModernCity)`
    font-size: 4rem;
    color: white;
`

export const DivThree = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #F3696D;
    width: 20%;
    height: 35vh;
    border-radius: 5%;
    div{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
        h2{
            font-size: 3rem;
            color: white;
            width: 20%;
        }
        p{
            width: 95%;
            text-align: center;
            font-size: 1.2rem;
            color: white;
            font-weight: 600;
        }
    }
    @media (max-width: 768px){
        width: 60%;
        height: 30vh;
    }
`

export const iconThree = styled(GiLifeTap)`
    font-size: 4rem;
    color: white;
`

export const DivFour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #AB6AA3;
    width: 20%;
    height: 35vh;
    border-radius: 5%;
    div{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
        h2{
            font-size: 3rem;
            color: white;
            width: 20%;
        }
        p{
            width: 95%;
            text-align: center;
            font-size: 1.2rem;
            color: white;
            font-weight: 600;
        }
    }
    @media (max-width: 768px){
        width: 60%;
        height: 30vh;
    }
`

export const iconFour = styled(GiClassicalKnowledge)`
    font-size: 4rem;
    color: white;
`

export const DivFive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #4AAD8D;
    width: 20%;
    height: 35vh;
    border-radius: 5%;
    div{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
        h2{
            font-size: 3rem;
            color: white;
            width: 20%;
        }
        p{
            width: 95%;
            text-align: center;
            font-size: 1.2rem;
            color: white;
            font-weight: 600;
        }
    }
    @media (max-width: 768px){
        width: 60%;
        height: 30vh;
    }
`

export const iconFive = styled(IoEarthOutline)`
    font-size: 4rem;
    color: white;
`

export const DivSix = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #43B4D4;
    width: 20%;
    height: 35vh;
    border-radius: 5%;
    div{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
        h2{
            font-size: 3rem;
            color: white;
            width: 20%;
        }
        p{
            width: 95%;
            text-align: center;
            font-size: 1.2rem;
            color: white;
            font-weight: 600;
        }
    }
    @media (max-width: 768px){
        width: 60%;
        height: 30vh;
    }
`

export const iconSix = styled(GiPayMoney)`
    font-size: 4rem;
    color: white;
`

export const DivSeven = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #3D61A9;
    width: 20%;
    height: 35vh;
    border-radius: 5%;
    div{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-around;
        h2{
            font-size: 3rem;
            color: white;
            width: 20%;
        }
        p{
            width: 95%;
            text-align: center;
            font-size: 1.2rem;
            color: white;
            font-weight: 600;
        }
    }
    @media (max-width: 768px){
        width: 60%;
        height: 30vh;
    }
`

export const iconSeven = styled(RiGovernmentLine)`
    font-size: 4rem;
    color: white;
`
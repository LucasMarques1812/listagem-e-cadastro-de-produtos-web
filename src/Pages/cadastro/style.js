import styled from "styled-components";

export const Container = styled.div`

background-color: #2589BD;
align-self: center;
display: inline-block;
flex-direction: column;
justify-content: space-between;
align-content: space-between;
border-radius: 15px;
border: solid 5px;

text{
    font-weight: bold;
    font-style: oblique;
    font-size: 2rem;
    margin-left: 4.5rem;
    @media (max-width: 473px){
    font-size: 120%;
}
}

input{
    
    
    @media (max-width: 473px){
    display: flex;
    flex-direction: column;
    width: 20%;
}
}

div{
    width: 90%;
    display: flex;
    font-size: large;
    justify-content: space-between;
    align-self: center;
    padding-top: 30px;
    margin-left: 3%;
    @media (max-width: 473px){
    font-size: 80%;
}
}

.divButton{
    justify-content: center;
}
button{
    width: 50%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: #080705;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 10px;
    @media (max-width: 473px){
    font-size: 80%;
}

    :hover{
        background-color: #080760;
        cursor: pointer;
    }
}
`

export const Listagem = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
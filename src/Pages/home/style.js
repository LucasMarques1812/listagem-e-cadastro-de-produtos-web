import styled from "styled-components";

export const ProdutoImg = styled.img`
  width: 40%;
  height: 50%;
  border-radius: 1em;
  margin-top: 5%;
`

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
`

export const ProdutoButton = styled.button`
 text-transform: uppercase;
 padding: 0.5rem;
 margin-top: 2%;
 color: white;
 background-color: #0008a7;
 font-weight: bold;
 font-family: Arial, Helvetica, sans-serif;
 border-radius: 1rem;
 &:hover{ 
  background-color: #5d65fa;
  cursor: pointer;
 }
 `
;

export const ContainerProduto = styled.div`
display: flex;
text-align: center;
flex-direction: column;
justify-content: center;
margin: 1rem;
margin-bottom: -5rem;
float: left;
margin-top: 9%;
border-style:solid;
background-color: #080705;
color:white;
width: 30vw;
height: 55vh;
border-radius:20px;
align-content: center;
`
;
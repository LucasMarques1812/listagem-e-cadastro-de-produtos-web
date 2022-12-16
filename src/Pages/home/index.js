import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import api from "../../service/api";
import { ContainerProduto, ProdutoButton, ProdutoImg, Container } from "./style";

export const Home = ()=>{
 const[listaProdutos, setListaProdutos] = useState([]);

 function requisitarLista(){
    api.get('products').then((res)=>{
        setListaProdutos(res.data)
        console.log(listaProdutos)
    }).catch((error)=>{
        console.log(error);
    });
 }

 useEffect(()=>{
    requisitarLista();
 },[]);
 return(
  <>
  <Navbar/>
    <Container>
    <div>
    {listaProdutos?.map((res) => {
      return (
       <ContainerProduto>
        <div key={res?.id}>
          <ProdutoImg img src={res?.image} alt="Foto do produto" width="200px" />
          <br></br>
          <span>{res?.title}</span>
          <br></br>
          <span>{res?.category}</span>
          <br></br>
          <span>R$ {res?.price}</span>
          <br></br>
          <ProdutoButton button>comprar</ProdutoButton>
          <br></br>
        </div>
        </ContainerProduto>
      );
    })}
  </div>
  </Container>
  </>
 )
}
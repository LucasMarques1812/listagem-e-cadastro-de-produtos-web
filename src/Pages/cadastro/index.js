import React, { useState } from "react";
import  Navbar  from "../../components/Navbar";
import api from "../../service/api";
import { Container, Listagem } from "./style";

export const Cadastro = ()=>{
    const[title, setTitle] = useState('')
    const[price, setPrice] = useState(0)
    const[category, setCategory] = useState('')
    const[image, setImage] = useState('')

    function postarProduto(){
        api.post("products",{
            title: title,
            price: price,
            category: category,
            image: image,
        }).then(res=>{
            console.log(res.status);
        }).catch(res=>{
            console.log(res.status)
        })
    }

    return(
        <>
        <Navbar/>
     <Listagem>
        <Container>
         <div>
          <text>Cadastrar produtos</text>
         </div>

            <div>
                <label>Digite o nome do produto:</label>
                <input type="text" value={title} onChange={(event)=>{
                    setTitle(event.target.value)
                }}></input>
            </div>
                
            <div>
                <label>Digite o preço do produto:</label>
                <input type="number" min="1" value={price} onChange={(event)=>{
                    setPrice(event.target.value)
                }}></input>
            </div>

            <div>
                <label>Digite a categoria do produto:</label>
                <input type="text" value={category} onChange={(event)=>{
                    setCategory(event.target.value)
                }}></input>
            </div>
                
            <div>
                <label>Digite a URL da imagem do produto:</label>
                <input type="text" value={image} onChange={(event)=>{
                    setImage(event.target.value)
                }}></input>
            </div>
                
            <div className="divButton">
                <button type="submit" value="cadastrar" onClick={()=>{
                    postarProduto();
                }}>Cadastrar produto</button>
            </div>
            
        </Container>
     </Listagem>
     </>
    )
}
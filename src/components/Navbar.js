import React from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <button className="buttonLeft" onClick={() => navigate("/")}>Ver listagem</button>
            <h1>Manolo Importados</h1>
            <button className="buttonRight" onClick={() => navigate("/cadastro")}>Cadastrar um produto</button>
        </div>
    )
}

export default Navbar
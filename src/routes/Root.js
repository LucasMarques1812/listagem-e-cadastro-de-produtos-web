import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Cadastro } from "../Pages/cadastro";
import { Home } from "../Pages/home";

export const Root = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
    );
  };
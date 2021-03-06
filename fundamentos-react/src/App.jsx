import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicação/IndiretaPai";
import DiretaPai from "./components/comunicação/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProduto from "./components/repeticao/TabelaProduto";
import ListaAluno from "./components/repeticao/ListaAluno";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Mega" color="#B9006E">
        <Mega quantidade={8} />
      </Card>

      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10} />
      </Card>

      <Card titulo="#11 - Componente Contralado (Input)" color="#E45F56">
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: "Gustavo" }} />
        <UsuarioInfo />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <TabelaProduto />
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAluno />
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <NumeroAleatorio max={60} min={1} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={8.7}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

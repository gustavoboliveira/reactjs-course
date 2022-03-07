import "./Mega.css";

import { useState } from "react";

export default (props) => {
  function gerarNumerosNaoContidos(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumerosNaoContidos(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(quantidade) {
    const numeros = Array(quantidade)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumerosNaoContidos(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  const [quantidade, setQuantidade] = useState(props.quantidade || 6);
  const numerosIniciais = gerarNumeros(quantidade);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div>
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div className="Mega">
        <label>Quantidade de Números</label>
        <input
          min={6}
          max={15}
          type="number"
          value={quantidade}
          onChange={(e) => {
            setQuantidade(+e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        ></input>
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(quantidade))}>
        Gerar Números
      </button>
    </div>
  );
};

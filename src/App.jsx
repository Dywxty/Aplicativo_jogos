import React, { useState } from "react";

import TelaInicial from "./components/TelaInicial";
import ListaJogos from "./components/ListaJogos";
import JogoDaVelha from "./components/JogoDaVelha";
import Forca from "./components/Forca";
import Memoria from "./components/Memoria";

export default function App() {
  const [tela, setTela] = useState("inicio");

  if (tela === "inicio") {
    return <TelaInicial irParaJogos={() => setTela("lista")} />;
  }

  if (tela === "lista") {
    return (
      <ListaJogos
        voltar={() => setTela("inicio")}
        abrirJogo={(jogo) => setTela(jogo)}
      />
    );
  }

  if (tela === "velha") {
    return <JogoDaVelha voltar={() => setTela("lista")} />;
  }

  if (tela === "forca") {
    return <Forca voltar={() => setTela("lista")} />;
  }

  if (tela === "memoria") {
    return <Memoria voltar={() => setTela("lista")} />;
  }

  return null;
}
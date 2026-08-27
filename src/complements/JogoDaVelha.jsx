import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function JogoDaVelha({ voltar }) {
  const [tabuleiro, setTabuleiro] = useState([
    "", "", "",
    "", "", "",
    "", "", "",
  ]);

  const [jogador, setJogador] = useState("X");

  const [vencedor, setVencedor] = useState(null);

  function verificarVencedor(tab) {
    const combinacoes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combinacao of combinacoes) {
      const [a, b, c] = combinacao;

      if (
        tab[a] &&
        tab[a] === tab[b] &&
        tab[a] === tab[c]
      ) {
        return tab[a];
      }
    }

    if (tab.every((item) => item !== "")) {
      return "empate";
    }

    return null;
  }

  function jogar(index) {
    if (tabuleiro[index] !== "" || vencedor) {
      return;
    }

    const novoTabuleiro = [...tabuleiro];

    novoTabuleiro[index] = jogador;

    const resultado = verificarVencedor(novoTabuleiro);

    setTabuleiro(novoTabuleiro);

    if (resultado) {
      setVencedor(resultado);
    } else {
      setJogador(jogador === "X" ? "O" : "X");
    }
  }

  function reiniciar() {
    setTabuleiro([
      "", "", "",
      "", "", "",
      "", "", "",
    ]);

    setJogador("X");
    setVencedor(null);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={voltar}>
        <Text style={styles.voltarTexto}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>⭕ Jogo da Velha ❌</Text>

      {!vencedor && (
        <Text style={styles.turno}>
          Vez do jogador: {jogador}
        </Text>
      )}

      {vencedor && (
        <Text style={styles.resultado}>
          {vencedor === "empate"
            ? "Deu empate! 🤝"
            : `Jogador ${vencedor} venceu! 🎉`}
        </Text>
      )}

      <View style={styles.tabuleiro}>
        {tabuleiro.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.casa}
            onPress={() => jogar(index)}
          >
            <Text style={styles.simbolo}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {vencedor && (
        <TouchableOpacity
          style={styles.botao}
          onPress={reiniciar}
        >
          <Text style={styles.textoBotao}>Jogar novamente</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.cancelar}
        onPress={voltar}
      >
        <Text style={styles.cancelarTexto}>
          Voltar para os jogos
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4C7",
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  voltar: {
    alignSelf: "flex-start",
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#E9DDFF",
    justifyContent: "center",
    alignItems: "center",
  },

  voltarTexto: {
    fontSize: 38,
    color: "#684A8E",
    lineHeight: 40,
  },

  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#684A8E",
    marginTop: 15,
    marginBottom: 15,
  },

  turno: {
    fontSize: 18,
    color: "#765F8D",
    marginBottom: 20,
  },

  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#684A8E",
    marginBottom: 20,
  },

  tabuleiro: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#684A8E",
    borderRadius: 20,
    padding: 5,
  },

  casa: {
    width: "33.33%",
    height: "33.33%",
    backgroundColor: "#E9DDFF",
    borderWidth: 3,
    borderColor: "#684A8E",
    justifyContent: "center",
    alignItems: "center",
  },

  simbolo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#684A8E",
  },

  botao: {
    marginTop: 25,
    backgroundColor: "#E9DDFF",
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 18,
  },

  textoBotao: {
    color: "#684A8E",
    fontWeight: "bold",
    fontSize: 17,
  },

  cancelar: {
    marginTop: 20,
  },

  cancelarTexto: {
    color: "#765F8D",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
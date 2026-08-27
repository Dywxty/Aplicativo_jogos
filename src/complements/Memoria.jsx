import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const simbolosOriginais = [
  "🍎",
  "🐱",
  "🌸",
  "⭐",
  "🍕",
  "🐶",
];

function embaralhar() {
  const cartas = [
    ...simbolosOriginais,
    ...simbolosOriginais,
  ];

  return cartas.sort(() => Math.random() - 0.5);
}

export default function Memoria({ voltar }) {
  const [cartas, setCartas] = useState(embaralhar());
  const [abertas, setAbertas] = useState([]);
  const [encontradas, setEncontradas] = useState([]);

  function virarCarta(index) {
    if (
      abertas.includes(index) ||
      encontradas.includes(cartas[index]) ||
      abertas.length === 2
    ) {
      return;
    }

    const novasAbertas = [...abertas, index];

    setAbertas(novasAbertas);

    if (novasAbertas.length === 2) {
      const primeira = cartas[novasAbertas[0]];
      const segunda = cartas[novasAbertas[1]];

      if (primeira === segunda) {
        setEncontradas([...encontradas, primeira]);
        setAbertas([]);
      } else {
        setTimeout(() => {
          setAbertas([]);
        }, 700);
      }
    }
  }

  function reiniciar() {
    setCartas(embaralhar());
    setAbertas([]);
    setEncontradas([]);
  }

  const ganhou = encontradas.length === simbolosOriginais.length;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={voltar}>
        <Text style={styles.voltarTexto}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>🧠 Jogo da Memória</Text>

      <Text style={styles.instrucao}>
        Encontre todos os pares!
      </Text>

      <View style={styles.tabuleiro}>
        {cartas.map((carta, index) => {
          const aberta =
            abertas.includes(index) ||
            encontradas.includes(carta);

          return (
            <TouchableOpacity
              key={index}
              style={styles.carta}
              onPress={() => virarCarta(index)}
            >
              <Text style={styles.cartaTexto}>
                {aberta ? carta : "?"}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {ganhou && (
        <Text style={styles.resultado}>
          Você encontrou todos! 🎉
        </Text>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={reiniciar}
      >
        <Text style={styles.textoBotao}>
          Reiniciar 🔄
        </Text>
      </TouchableOpacity>

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
    marginBottom: 8,
  },

  instrucao: {
    fontSize: 17,
    color: "#765F8D",
    marginBottom: 20,
  },

  tabuleiro: {
    width: 330,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  carta: {
    width: 90,
    height: 90,
    margin: 6,
    borderRadius: 20,
    backgroundColor: "#E9DDFF",
    justifyContent: "center",
    alignItems: "center",
  },

  cartaTexto: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#684A8E",
  },

  resultado: {
    marginTop: 15,
    fontSize: 19,
    fontWeight: "bold",
    color: "#684A8E",
  },

  botao: {
    marginTop: 20,
    backgroundColor: "#E9DDFF",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 18,
  },

  textoBotao: {
    color: "#684A8E",
    fontWeight: "bold",
    fontSize: 17,
  },

  cancelar: {
    marginTop: 18,
  },

  cancelarTexto: {
    color: "#765F8D",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
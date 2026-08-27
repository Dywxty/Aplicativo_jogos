import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TelaInicial({ irParaJogos }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🎮</Text>

        <Text style={styles.titulo}>Bem-vindo!</Text>

        <Text style={styles.subtitulo}>
          Escolha um jogo e divirta-se!
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={irParaJogos}
        >
          <Text style={styles.textoBotao}>Ver jogos 🎲</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4C7",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#E9DDFF",
    borderRadius: 30,
    padding: 35,
    alignItems: "center",
  },

  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#684A8E",
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    color: "#765F8D",
    textAlign: "center",
    marginBottom: 30,
  },

  botao: {
    backgroundColor: "#FFFDF5",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 20,
  },

  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#684A8E",
  },
});
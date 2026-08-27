import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ListaJogos({ voltar, abrirJogo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={voltar}>
        <Text style={styles.voltarTexto}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>🎮 Escolha um jogo</Text>

      <ScrollView
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.emoji}>⭕❌</Text>

          <Text style={styles.nome}>Jogo da Velha</Text>

          <Text style={styles.descricao}>
            Enfrente seu adversário e consiga três símbolos em sequência!
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => abrirJogo("velha")}
          >
            <Text style={styles.textoBotao}>Jogar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🔤</Text>

          <Text style={styles.nome}>Forca</Text>

          <Text style={styles.descricao}>
            Descubra a palavra antes que suas tentativas acabem!
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => abrirJogo("forca")}
          >
            <Text style={styles.textoBotao}>Jogar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🧠</Text>

          <Text style={styles.nome}>Jogo da Memória</Text>

          <Text style={styles.descricao}>
            Encontre todos os pares de cartas!
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => abrirJogo("memoria")}
          >
            <Text style={styles.textoBotao}>Jogar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4C7",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  voltar: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "#E9DDFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  voltarTexto: {
    fontSize: 38,
    color: "#684A8E",
    lineHeight: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#684A8E",
    textAlign: "center",
    marginBottom: 20,
  },

  lista: {
    paddingBottom: 30,
    gap: 15,
  },

  card: {
    backgroundColor: "#E9DDFF",
    borderRadius: 25,
    padding: 22,
    alignItems: "center",
  },

  emoji: {
    fontSize: 40,
    marginBottom: 5,
  },

  nome: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#684A8E",
    marginBottom: 8,
  },

  descricao: {
    color: "#765F8D",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#FFFDF5",
    borderRadius: 18,
    paddingVertical: 11,
    paddingHorizontal: 35,
  },

  textoBotao: {
    color: "#684A8E",
    fontWeight: "bold",
    fontSize: 17,
  },
});
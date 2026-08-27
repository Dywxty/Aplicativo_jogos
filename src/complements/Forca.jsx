import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const palavras = [
  { palavra: "ABACAXI", tema: "Fruta" },
  { palavra: "ELEFANTE", tema: "Animal" },
  { palavra: "ESCOLA", tema: "Lugar" },
  { palavra: "PIZZA", tema: "Comida" },
  { palavra: "GUITARRA", tema: "Objeto" },
  { palavra: "BORBOLETA", tema: "Animal" },
  { palavra: "CHOCOLATE", tema: "Comida" },
  { palavra: "CASTELO", tema: "Lugar" },
];

function palavraAleatoria() {
  return palavras[
    Math.floor(Math.random() * palavras.length)
  ];
}

export default function Forca({ voltar }) {
  const [item, setItem] = useState(palavraAleatoria());
  const [letras, setLetras] = useState([]);
  const [erros, setErros] = useState(0);

  const limiteErros = 6;

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function escolherLetra(letra) {
    if (
      letras.includes(letra) ||
      erros >= limiteErros ||
      ganhou()
    ) {
      return;
    }

    setLetras([...letras, letra]);

    if (!item.palavra.includes(letra)) {
      setErros(erros + 1);
    }
  }

  function ganhou() {
    return item.palavra
      .split("")
      .every((letra) => letras.includes(letra));
  }

  function novaPartida() {
    setItem(palavraAleatoria());
    setLetras([]);
    setErros(0);
  }

  const terminou = ganhou() || erros >= limiteErros;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={voltar}>
        <Text style={styles.voltarTexto}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>🔤 Jogo da Forca</Text>

      <View style={styles.card}>
        <Text style={styles.tema}>
          Tema: {item.tema}
        </Text>

        <Text style={styles.palavra}>
          {item.palavra
            .split("")
            .map((letra) =>
              letras.includes(letra) ? letra : "_"
            )
            .join(" ")}
        </Text>

        <Text style={styles.erros}>
          Erros: {erros} / {limiteErros}
        </Text>
      </View>

      {ganhou() && (
        <Text style={styles.resultado}>
          Você acertou! 🎉
        </Text>
      )}

      {erros >= limiteErros && (
        <Text style={styles.resultado}>
          A palavra era: {item.palavra}
        </Text>
      )}

      {!terminou && (
        <View style={styles.alfabeto}>
          {alfabeto.map((letra) => (
            <TouchableOpacity
              key={letra}
              style={[
                styles.letra,
                letras.includes(letra) && styles.letraUsada,
              ]}
              onPress={() => escolherLetra(letra)}
            >
              <Text style={styles.letraTexto}>
                {letra}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {terminou && (
        <TouchableOpacity
          style={styles.botao}
          onPress={novaPartida}
        >
          <Text style={styles.textoBotao}>
            Nova palavra 🎲
          </Text>
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
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#E9DDFF",
    borderRadius: 25,
    padding: 25,
    width: "100%",
    alignItems: "center",
  },

  tema: {
    fontSize: 18,
    color: "#765F8D",
    marginBottom: 25,
  },

  palavra: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#684A8E",
    letterSpacing: 5,
  },

  erros: {
    marginTop: 20,
    fontSize: 16,
    color: "#765F8D",
  },

  resultado: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "bold",
    color: "#684A8E",
  },

  alfabeto: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },

  letra: {
    width: 42,
    height: 42,
    backgroundColor: "#E9DDFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },

  letraUsada: {
    opacity: 0.35,
  },

  letraTexto: {
    color: "#684A8E",
    fontWeight: "bold",
    fontSize: 16,
  },

  botao: {
    marginTop: 20,
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
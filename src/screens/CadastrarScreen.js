import React, { useState } from "react";
import { RadioButton, Checkbox } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  Alert,
  Pressable,
  TextInput,
} from "react-native";

const CadastrarScreen = ({ navigation, route }) => {
  const [checked, setChecked] = React.useState("first");
  const [termos, setTermos] = React.useState(false);
  const [email, setEmail] = React.useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fiap_bg.png")}
        style={styles.imageBackground}
      >
        <Image
          style={styles.imageLogo}
          source={require("../../assets/fiap_logo.png")}
        />

        <Text style={styles.textTitle}>Cadastrar</Text>
        <TextInput style={styles.textInput} placeholder="Username" />
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="Password" />
        <TextInput style={styles.textInput} placeholder="Repeat password" />

        <Text style={styles.textTitle}>Sexo</Text>

        <View style={styles.secondBtn}>
          <RadioButton
            uncheckedColor="white"
            color="#ee125a"
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={[styles.text, styles.test]}>Masculino</Text>
          <RadioButton
            uncheckedColor="white"
            color="#ee125a"
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={[styles.text, styles.test]}>Feminino</Text>
        </View>

        <View style={styles.secondBtn}>
          <Checkbox
            status={termos ? "checked" : "unchecked"}
            color="#ee125a"
            uncheckedColor="white"
            onPress={() => {
              setTermos(!termos);
            }}
          />
          <Text style={[styles.text, styles.test]}>
            Li e concordo com o termos de uso.
          </Text>
        </View>

        <View style={styles.secondBtn}>
          <Checkbox
            status={email ? "checked" : "unchecked"}
            color="#ee125a"
            uncheckedColor="white"
            onPress={() => {
              setEmail(!email);
            }}
          />
          <Text style={[styles.text, styles.test]}>
            Aceito receber e-mails promocionais.
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "conver",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imageLogo: {
    width: 150,
    margin: 16,
    resizeMode: "contain",
    height: 50,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  textTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  textInput: {
    height: 60,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    borderColor: "rgba(60, 60, 60, 1)",
    borderRadius: 3,
    color: "white",
    fontSize: 15,
    backgroundColor: "rgba(60, 60, 60, 0.5)",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#ee125a",
    marginTop: 8,
    width: "100%",
  },
  secondBtn: {
    width: "100%",
    flexDirection: "row",
    //justifyContent : 'space-between',
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  test: {
    lineHeight: 35,
  },
});

export default CadastrarScreen;

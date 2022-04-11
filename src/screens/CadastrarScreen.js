import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { RadioButton, Checkbox } from "react-native-paper";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";

const CadastroScreen = ({ navigation }) => {
  const [textInputLogin, setTextInputLogin] = useState("");
  const [textInputNomeCompleto, setTextInputNomeCompleto] = useState("");
  const [textInputSenha, setTextInputSenha] = useState("");
  const [textInputSenhaConfirmar, setTextInputSenhaConfirmar] = useState("");
  const [radioSexo, setRadioSexo] = useState("feminino");
  const [checkTermo, setCheckTermo] = useState(false);
  const [checkSpam, setCheckSpam] = useState(false);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <ImageBackground
      source={require("../../assets/fiap_bg.png")}
      style={styles.imageBackground}
    >
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/fiap_logo.png")}
            style={styles.imageLogo}
          />
          <Text style={styles.textTitle}>Cadastrar</Text>
          <TextInput
            value={textInputLogin}
            onChangeText={(value) => setTextInputLogin(value)}
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor="white"
          />
          <TextInput
            value={textInputNomeCompleto}
            onChangeText={(value) => setTextInputNomeCompleto(value)}
            style={styles.textInput}
            placeholder="Nome Completo"
            placeholderTextColor="white"
          />
          <TextInput
            value={textInputSenha}
            onChangeText={(value) => setTextInputSenha(value)}
            style={styles.textInput}
            placeholder="Senha"
            placeholderTextColor="white"
          />
          <TextInput
            value={textInputSenhaConfirmar}
            onChangeText={(value) => setTextInputSenhaConfirmar(value)}
            style={styles.textInput}
            placeholder="Confirmar Senha"
            placeholderTextColor="white"
          />
          <View style={styles.fieldSpace}>
            <View style={styles.formGroup}>
              <Text style={styles.text}>Sexo:</Text>
            </View>
            <View style={styles.formGroup}>
              <RadioButton
                value="feminino"
                status={radioSexo === "feminino" ? "checked" : "unchecked"}
                onPress={() => setRadioSexo("feminino")}
                uncheckedColor="white"
                color="#ee125a"
              />
              <Text style={styles.textRadio}>Feminino</Text>
            </View>
            <View style={styles.formGroup}>
              <RadioButton
                value="masculino"
                status={radioSexo === "masculino" ? "checked" : "unchecked"}
                onPress={() => setRadioSexo("masculino")}
                uncheckedColor="white"
                color="#ee125a"
              />
              <Text style={styles.textRadio}>Masculino</Text>
            </View>
          </View>
          <View style={styles.fieldSpace}>
            <View style={styles.formGroup}>
              <Checkbox
                status={checkTermo ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckTermo(!checkTermo);
                }}
                uncheckedColor="white"
                color="#ee125a"
              />
              <Text style={styles.textRadio}>Li e concordo o termo de uso</Text>
            </View>
            <View style={styles.formGroup}>
              <Checkbox
                status={checkSpam ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckSpam(!checkSpam);
                }}
                uncheckedColor="white"
                color="#ee125a"
              />
              <Text style={styles.textRadio}>Aceito receber emails</Text>
            </View>
          </View>
          <Pressable style={styles.button} onPress={showDialog}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </Pressable>{" "}
          
          <Provider>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>Username: {textInputLogin}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </Provider>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CadastroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  imageLogo: {
    resizeMode: "contain",
    height: 90,
    width: "25%",
  },
  text: {
    color: "white",
  },
  textRadio: {
    color: "white",
    marginTop: 8,
  },
  textTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    margin: 16,
  },
  button: {
    backgroundColor: "#ee125a",
    width: "100%",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  buttonText: {
    color: "white",
  },
  textInput: {
    backgroundColor: "rgba(60,60,60,0.5)",
    padding: 16,
    width: "100%",
    marginBottom: 8,
    color: "white",
  },
  buttonsHorizontal: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formGroup: {
    flexDirection: "row",
    width: "100%",
  },
  fieldSpace: {
    width: "100%",
    marginBottom: 8,
  },
});

import React, { useState } from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import InputComponent from '../components/InputComponent';
import PressableComponent from '../components/PressableComponent';

const LoginScreen = ({ navigation }) => {
  const [textInputLogin, setTextInputLogin] = useState('');
  const [textInputSenha, setTextInputSenha] = useState('');

  return (
    <ImageBackground source={require('../../assets/fiap_bg.png')} style={styles.imageBackground}>
        <View style={styles.container}>
            <Image source={require('../../assets/fiap_logo.png')} style={styles.imageLogo}/>
            <Text style={styles.textTitle}>Entrar</Text>
            <InputComponent
              value={textInputLogin}
              onChangeText={(value) => setTextInputLogin(value)}
              placeholder='Username'
            />
            <InputComponent
              value={textInputSenha}
              onChangeText={(value) => setTextInputSenha(value)}
              placeholder='Senha'
              
            />
            <Pressable style={styles.button} onPress={() => navigation.replace('Cadastrar')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>

              <PressableComponent
                text="aloalo"
                onPress={()=>navigation.replace('Cadastrar')}
              />

              {console.log(navigation)}
            <View style={styles.buttonsHorizontal}>
              <Pressable style={styles.buttonLink} onPress={() => navigation.replace('Cadastrar')}>
                <Text style={styles.text}>Cadastrar</Text>
              </Pressable>
              <Pressable style={styles.buttonLink} onPress={() => navigation.replace('Cadastrar')}>
                <Text style={styles.text}>
                  Esqueceu sua senha
                </Text>
              </Pressable>
            </View>
        </View>
    </ImageBackground>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageLogo: {
    resizeMode: 'contain',
    height: 90,
    width: '50%',
  },
  text: {
    color: 'white'
  },
  textTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 16,
  },
  button: {
    backgroundColor: '#ee125a',
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    marginTop: 16,
  },
  buttonText: {
      color: 'white',
  },
  textInput: {
    backgroundColor: 'rgba(60,60,60,0.5)',
    padding: 16,
    width: '100%',
    marginBottom: 8,
    color: 'white',
  },
  buttonsHorizontal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

import React from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button,
  ImageBackground,
  Image,
  Alert,
  Pressable,
  SafeAreaView,
  TextInput,
} from 'react-native';

const LoginScreen = ({ navigation }) => {

    const [text, onChangeText] = React.useState("Username");
    

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fiap_bg.png')} style={styles.imageBackground}>
                <Image
                    style={styles.imageLogo}
                    source={require('../../assets/fiap_logo.png')}
                />

                <Text style={styles.textTitle}>Entrar</Text>
                
                
                <TextInput style={styles.textInput}   placeholder='Username'/>
                <TextInput style={styles.textInput}  placeholder='Password' />
                {/*onChangeText={onChangeText}
                value={text}*/}
                
                <Pressable style={styles.button} onPress={()=> navigation.replace('Cadastrar')}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

{/*<Button title='ENTRAR' style={styles.teste} onPress={() => navigation.replace('Cadastrar')} />*/}

                <View style={styles.secondBtn}>
                <Text style={styles.text} onPress={()=> navigation.replace('Cadastrar')} >Cadastrar</Text>

                <Text style={styles.text}>Esqueci a senha</Text>

                </View>
            
            </ImageBackground>

            


        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'conver',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    imageLogo: {
        width: 150,
        margin: 16,
        resizeMode: 'contain',
        height: 50,
    },
    text: {
        fontSize: 18,
        color: 'white',
        
    },
    secondBtn :{
        width: '100%',
        flexDirection: "row",
        justifyContent : 'space-between',
        marginTop: 10,
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },
    textInput: {
        height: 60,
        width: '100%',
        margin: 12,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'rgba(60, 60, 60, 1)',
        borderRadius: 3,
        color: 'white',
        fontSize: 15,
        backgroundColor: 'rgba(60, 60, 60, 0.5)',
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#ee125a',
        marginTop: 8,
        width: '100%',
    },
    teste:{
        color: 'orange',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
    });

export default LoginScreen;
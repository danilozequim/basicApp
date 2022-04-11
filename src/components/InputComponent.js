import { TextInput, StyleSheet } from "react-native";

export default function InputComponent(props){
    const styles = StyleSheet.create({
        textInput: {
            backgroundColor: props.backgroundColor ?? 'rgba(60,60,60,0.5)',
            padding: 16,
            width: props.width ?? '100%',
            marginBottom: 8,
            color: 'white',
        },
    });
    
    return (
        <TextInput
            value={props.value}
            onChangeText={(value) => props.onChangeText(value)}
            style={styles.textInput}
            placeholder={props.placeholder ?? 'Preencha'}
            placeholderTextColor='white'
        />
    );
};


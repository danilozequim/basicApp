import { Pressable, StyleSheet, Text } from "react-native";

export default function PressableComponent(props) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: props.backgroundColor ?? "#ee125a",
      width: "100%",
      alignItems: "center",
      padding: 16,
      borderRadius: 10,
      marginBottom: 16,
      marginTop: 16,
    },
    text: {
      color: "white",
    },
  });

  return (
    <Pressable
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text ?? "Botão generico"}</Text>
    </Pressable>
  );
}

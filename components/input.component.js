import { TextInput, StyleSheet } from "react-native"


export default function Input({ placeholder, onChangeText}) {
    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        />
    )
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  });
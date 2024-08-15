import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function Button({title,onPress}) {
  return (
    <TouchableOpacity>
      <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 99,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textAlign: 'center',
  }
})
import { StyleSheet, Text, TextInput, View } from "react-native";



const Input = (props) => {
  return (
    <View
      style={styles.container}
    >
      {props.icon && props.icon}
      <TextInput
        placeholderTextColor={'gray'}
  
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop:12,
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor:'white',
    borderRadius: 12,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    color: 'black'
  },
});

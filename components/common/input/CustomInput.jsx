import { View, Text, TextInput } from "react-native"
import React from "react"
import styles from "./CustomInput.style"

const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} placeholder="placeholder">
        CustomInput
      </TextInput>
    </View>
  )
}

export default CustomInput

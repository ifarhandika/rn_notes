import { View, Text, TextInput } from "react-native"
import React from "react"
import styles from "./CustomInput.style"
import { useController, useForm } from "react-hook-form"

const CustomInput = ({
  placeholder,
  name,
  type,
  value,
  setValue,
  handleChange,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        name={name}
        style={styles.text}
        placeholder={placeholder}
        secureTextEntry={type === "password" ? true : false}
        onChangeText={(text) => handleChange(text, name)}
      />
    </View>
  )
}

export default CustomInput

import { View, Text } from "react-native"
import React from "react"
import CustomInput from "../common/input/CustomInput"
import styles from "./styles"

const LoginPage = () => {
  return (
    <View style={{ width: "80%", alignItems: "center" }}>
      <CustomInput />
      <CustomInput />
    </View>
  )
}

export default LoginPage

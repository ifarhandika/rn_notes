import { View, Text } from "react-native"
import React from "react"
import { Link } from "expo-router"

const Register = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register</Text>
      <Link href="/">Go Back</Link>
    </View>
  )
}

export default Register

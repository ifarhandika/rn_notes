import { View, Text } from "react-native"
import React, { useState } from "react"
import { Link } from "expo-router"
import { useAuth } from "../../../context/auth"

import { validateRegister } from "./validation"
import CustomInput from "../../common/input/CustomInput"
import CustomBtn from "../../common/button/CustomBtn"

import styles from "./styles"

const RegisterPage = () => {
  const { signIn } = useAuth()
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    error: {
      status: false,
    },
  })
  const { error } = userData

  const handleChange = (text, name) => {
    setUserData({
      ...userData,
      [name]: text,
    })
  }

  const handleSubmit = (userData, setUserData) => {
    if (!validateRegister(userData, setUserData)) return
    signIn({ username: userData.username, email: userData.email })
  }
  return (
    <View style={{ width: "80%" }}>
      <CustomInput
        placeholder="Username"
        name="username"
        type="text"
        value={userData.username}
        handleChange={handleChange}
      />
      {error.status && error.username && (
        <Text style={styles.errMsg}>{error.username}</Text>
      )}
      <CustomInput
        placeholder="E-mail"
        name="email"
        type="text"
        value={userData.email}
        handleChange={handleChange}
      />
      {error.status && error.email && (
        <Text style={styles.errMsg}>{error.email}</Text>
      )}
      <CustomInput
        placeholder="Password"
        name="password"
        type="password"
        value={userData.password}
        handleChange={handleChange}
      />
      {error.status && error.password && (
        <Text style={styles.errMsg}>{error.password}</Text>
      )}
      <CustomBtn
        text={"Register"}
        onPress={() => handleSubmit(userData, setUserData)}
      />
      <Text style={styles.text}>
        Already have an account?
        <Link href="/login" style={styles.textDesign}>
          <Text> Log In </Text>
        </Link>
        now!
      </Text>
    </View>
  )
}

export default RegisterPage

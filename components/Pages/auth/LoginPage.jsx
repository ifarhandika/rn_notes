import { View, Text } from "react-native"
import React, { useState } from "react"
import { Link, useRouter } from "expo-router"

import { useAuth } from "../../../context/auth"
import { validateLogin } from "./validation"
import CustomInput from "../../common/input/CustomInput"
import CustomBtn from "../../common/button/CustomBtn"

import styles from "./styles"

const LoginPage = () => {
  const router = useRouter()
  const { signIn } = useAuth()
  const [userData, setUserData] = useState({
    username: "",
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

  const handleLogin = (userData, setUserData) => {
    if (!validateLogin(userData, setUserData)) return
    signIn({ username: userData.username })
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
        text={"Login"}
        onPress={() => handleLogin(userData, setUserData)}
      />
      <Text style={styles.text}>
        Don't have an account?
        <Link href={"/register"} style={styles.textDesign}>
          <Text> Register </Text>
        </Link>
        now!
      </Text>
    </View>
  )
}

export default LoginPage

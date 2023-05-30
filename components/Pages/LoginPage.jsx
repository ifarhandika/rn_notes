import { View, Text } from "react-native"
import React, { useState } from "react"
import { Link } from "expo-router"

import CustomInput from "../common/input/CustomInput"
import CustomBtn from "../common/button/CustomBtn"

import styles from "./styles"

const LoginPage = () => {
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

  const validateForm = () => {
    let error = { status: false }

    const { username, password } = userData

    if (username === null || username === "") {
      error = {
        ...error,
        status: true,
        username: "Please fill out the username",
      }
    }
    if (password === null || password === "") {
      error = {
        ...error,
        status: true,
        password: "Please fill out the password",
      }
    }
    setUserData((data) => ({ ...data, error }))
    return !error.status
  }

  const handleLogin = () => {
    if (!validateForm()) return
    alert("sukses mencoba login")
  }

  return (
    <View style={{ width: "80%" }}>
      <CustomInput
        placeholder="Username"
        name="username"
        type="text"
        value={userData}
        setValue={setUserData}
        handleChange={handleChange}
      />
      {error.status && error.username && (
        <Text style={styles.errMsg}>{error.username}</Text>
      )}
      <CustomInput
        placeholder="Password"
        name="password"
        type="password"
        value={userData}
        setValue={setUserData}
        handleChange={handleChange}
      />
      {error.status && error.password && (
        <Text style={styles.errMsg}>{error.password}</Text>
      )}
      <CustomBtn text={"Login"} onPress={() => handleLogin(userData)} />
      <Text style={styles.text}>
        Don't have an account?
        <Link href="/register" style={styles.textDesign}>
          <Text> Register </Text>
        </Link>
        now!
      </Text>
    </View>
  )
}

export default LoginPage

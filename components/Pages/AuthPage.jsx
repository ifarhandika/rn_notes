import { View, Text, SafeAreaView, Image } from "react-native"

import Logo from "../../assets/gote-logo.png"

import styles from "./styles"
import { useRouter } from "expo-router"
import CustomBtn from "../common/button/CustomBtn"

const AuthPage = () => {
  const router = useRouter()
  const onLoginPressed = () => {
    router.push("/login")
  }
  const onRegisterPressed = () => {
    router.push("/register")
  }

  return (
    <SafeAreaView style={{ width: "80%", alignItems: "center" }}>
      <Image source={Logo} style={styles.logo} />
      <CustomBtn text={"Login"} onPress={onLoginPressed} />
      <CustomBtn text={"Register"} onPress={onRegisterPressed} />
    </SafeAreaView>
  )
}

export default AuthPage

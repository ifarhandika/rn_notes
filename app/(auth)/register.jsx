import { SafeAreaView } from "react-native"
import RegisterPage from "../../components/Pages/auth/RegisterPage"

const Register = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegisterPage />
    </SafeAreaView>
  )
}

export default Register

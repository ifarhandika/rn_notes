import { SafeAreaView } from "react-native"
import LoginPage from "../../components/Pages/auth/LoginPage"

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginPage />
    </SafeAreaView>
  )
}

export default Login

import { SafeAreaView, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { Link } from "expo-router"
import LoginPage from "../../components/Pages/LoginPage"

const Login = () => {
  const router = useRouter()
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <LoginPage />
    </SafeAreaView>
  )
}

export default Login

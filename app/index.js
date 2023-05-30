import { View, Text, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router"
import AuthPage from "../components/Pages/AuthPage"

const Home = () => {
  const router = useRouter()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthPage />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
    </SafeAreaView>
  )
}

export default Home

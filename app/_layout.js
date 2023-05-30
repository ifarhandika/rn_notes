import { Stack, Tabs, Slot } from "expo-router"
import { AuthProvider } from "../context/auth"

export default function Layout(props) {
  // return <Stack screenOptions={{ headerShown: false }}/>
  return (
    <AuthProvider>
      <Slot screenOptions={{ headerShown: true }} />
    </AuthProvider>
  )
}

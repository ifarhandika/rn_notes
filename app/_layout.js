import { Stack, Tabs, Slot } from "expo-router"
import { AuthProvider } from "../context/auth"
// import { Provider } from "react-redux"
// import { store } from "../store/store"

export default function Layout(props) {
  // return <Stack screenOptions={{ headerShown: false }}/>
  return (
    // <Provider store={store}>
      <AuthProvider>
        <Slot screenOptions={{ headerShown: true }} />
      </AuthProvider>
    // </Provider>
  )
}

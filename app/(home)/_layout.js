import { Stack, Tabs, Slot } from "expo-router"
import { COLORS } from "../../constants"
import { View } from "react-native"

export default function DashboardLayout(props) {
  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      >
        <Tabs.Screen name="home" options={{ tabBarLabel: "Home" }} />
        <Tabs.Screen name="_calendar" options={{ tabBarLabel: "Calendar" }} />
        <Tabs.Screen name="_profile" options={{ tabBarLabel: "Profile" }} />
      </Tabs>
    </>
  )
}

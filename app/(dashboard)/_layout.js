import { Stack, Tabs, Slot } from "expo-router"
import { COLORS } from "../../constants"
import { Image, View } from "react-native"

import HomeLogo from "../../assets/icons/home.png"
import CalendarLogo from "../../assets/icons/calendar.png"
import ProfileLogo from "../../assets/icons/user.png"

export default function DashboardLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{ tabBarLabel: "Home", tabBarIcon: () => TabLogo(HomeLogo) }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            tabBarLabel: "Calendar",
            tabBarIcon: () => TabLogo(CalendarLogo),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => TabLogo(ProfileLogo),
          }}
        />
      </Tabs>
    </>
  )
}

const TabLogo = (logo) => {
  return <Image style={{ height: 25, width: 25 }} source={logo} />
}

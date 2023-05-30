import { View, Text } from "react-native"
import React from "react"
import { useAuth } from "../../../context/auth"

const DashboardPage = () => {
  const { signOut } = useAuth()
  return (
    <View>
      <Text>DashboardPage</Text>
      <Text onPress={() => signOut()}>Sign Out</Text>
    </View>
  )
}

export default DashboardPage

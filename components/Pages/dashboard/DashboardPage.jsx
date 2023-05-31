import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useAuth } from "../../../context/auth"
import NotesPage from "../notes/NotesPage"

const DashboardPage = () => {
  const { signOut } = useAuth()
  return (
    <View>
      <Text>DashboardPage</Text>
    </View>
  )
}

export default DashboardPage

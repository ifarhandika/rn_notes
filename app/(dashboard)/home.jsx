import { View, Text, SafeAreaView } from "react-native"
import React from "react"
import DashboardPage from "../../components/Pages/dashboard/DashboardPage"

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", alignItems: "center" }}>
      <DashboardPage />
    </SafeAreaView>
  )
}

export default Home

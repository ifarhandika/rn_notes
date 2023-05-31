import { View, Text, SafeAreaView } from "react-native"
import React from "react"
import DashboardPage from "../../components/Pages/dashboard/DashboardPage"

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DashboardPage />
    </SafeAreaView>
  )
}

export default Home

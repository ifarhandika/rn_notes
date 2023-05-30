import { SafeAreaView } from 'react-native'
import React from 'react'
import DashboardPage from '../../components/Pages/dashboard/DashboardPage'

const dashboard = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DashboardPage />
    </SafeAreaView>
  )
}

export default dashboard
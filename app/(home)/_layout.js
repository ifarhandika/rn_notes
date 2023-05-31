import { Stack, Tabs, Slot } from "expo-router"

export default function DashboardLayout(props) {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home"/>
        <Tabs.Screen name="_profile"/>
      </Tabs>
    </>
  )
}

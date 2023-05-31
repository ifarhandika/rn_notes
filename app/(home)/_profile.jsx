import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useAuth } from "../../context/auth"

const Profile = () => {
  const { signOut } = useAuth()

  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

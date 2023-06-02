import { View, Text } from "react-native"
import React from "react"
import styles from "./CustomCards.style"

const CustomCards = ({ id, category, message }) => {
  return (
    <View style={styles.container}>
      <Text>{category}</Text>
      <Text>{message}</Text>
    </View>
  )
}

export default CustomCards

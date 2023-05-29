import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"

import styles from "./CustomBtn.style"

const CustomBtn = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

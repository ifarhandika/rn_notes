import { StyleSheet } from "react-native"
import { COLORS } from "../../../constants/theme"

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  mainContainer: {
    width: "100%",
  },
  text: {
    fontWeight: "500",
    color: "white",
  },
})

export default styles

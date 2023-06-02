import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native"
import React from "react"
import { useAuth } from "../../../context/auth"
import NotesPage from "../notes/NotesPage"
import CustomCards from "../../common/cards/CustomCards"
import { noteList } from "../notes/noteList"

const DashboardPage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {noteList.map((note) => {
        let noteID = note.id
        let noteCategory = note.category
        let noteMessage = note.message

        return (
          <View key={noteID}>
            <CustomCards
              id={noteID}
              category={noteCategory}
              message={noteMessage}
            />
          </View>
        )
      })}
    </ScrollView>
  )
}

export default DashboardPage

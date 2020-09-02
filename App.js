import React from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View} from 'react-native'
import Header from "./src/components/Header"
import AlbumList from "./src/components/AlbumList"

export default function App() {
  return (
    <SafeAreaView>
      <Header name = {"Albums"}/>
        <ScrollView>
          <AlbumList/>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
 
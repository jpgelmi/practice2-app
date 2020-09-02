import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import Header from "./src/components/Header"
import AlbumList from "./src/components/AlbumList"

export default function App() {
  return (
    <SafeAreaView>
      <Header name = {"Albums"}/>
      <AlbumList/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
 
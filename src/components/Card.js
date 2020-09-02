import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    const{item} = props
    return (
        <View style = {styles.container}>
            <Text>
                {item.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       // flex: 1,
        padding: 30,

    }
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TextComponent({data}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>{data.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20
    },
    textStyle:{
        fontSize: 15,
        fontWeight: "bold"
    }
})
 
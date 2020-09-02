import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CardSection(props) {
    return (
        <View style = {styles.container}>
            {props.chilldren}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        padding:5,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderColor: "#ddd",
        position: "relative"
    }
})

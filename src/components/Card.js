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
        //flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        height: 300,
        width: 300,
        shadowColor: "black",
        shadowOffset:{ width: 3, height: 3},
        shadowOpacity: 0.2,
        marginVertical: 10, 
        borderRadius: 20
        
    }
})

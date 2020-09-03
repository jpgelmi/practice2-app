import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export default function ButtonComponent() {

    function onPressAction(){
        
    }

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress = {}>
                <Text style = {styles.textStyle}>
                    Comprar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        paddingTop:15,
        //backgroundColor: "red",
        flex:1,
    },
    textStyle:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#2C528C"
    }
})

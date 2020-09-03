import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableOpacity
} from 'react-native'

export default function ButtonComponent(props) {
    const{data} = props

    function onPressAction(){
        Linking.openURL(data.url)
    }

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress = {onPressAction}>
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

import React from 'react'
import { StyleSheet, View, Image} from 'react-native'

export default function ImageComponent(props) {
    const {data} = props
    console.log(data.image)

    return (
        <View style = {styles.container}>
            <Image
                source = {{uri: data.image }}
                style = {styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "flex-start",
        justifyContent: "center"
    },
    image:{
        borderRadius: 10,
        height: 250,
        width: 250,
    }
})
 
import React from 'react'
import { StyleSheet, View, Image} from 'react-native'

export default function ImageComponent(props) {
    const {data} = props
    console.log(data.image)

    return (
        <View>
            <Image
                source = {{uri: data.image }}
                styles = {styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        borderRadius: 10,
        height: 100,
        width: 100
    }
})
 
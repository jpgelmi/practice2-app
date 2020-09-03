import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

export default function Image(props) {
    return (
        <View>
            <Image
                source = {{uri: }}
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

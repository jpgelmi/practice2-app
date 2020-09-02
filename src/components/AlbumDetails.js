import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from "./Card"
import CardSection from "./CardSection"

export default function AlbumDetails(props) {
    const{item} = props
    return (
        <Card>
            <CardSection>
                <Text>{item.title}</Text>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({})

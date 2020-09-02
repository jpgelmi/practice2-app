import React , {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {getMusicAlbums} from "../api/Api"
import {map} from "lodash"
import Card from "./Card"

export default function AlbumList(){
    const [data, setData] = useState()

    useEffect(() => {
        getMusicAlbums().then((response) => {
            //console.log(response)
            setData(response)
        }) 
    },[])

    //console.log(data, "Hola")
    return (
        <View>
           {map(data, (item, index) => (
                <Card key = {index} item = {item}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({})

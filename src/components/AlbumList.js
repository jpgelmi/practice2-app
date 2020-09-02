import React , {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {getMusicAlbums} from "../api/Api"
import AlbumDetails from "./AlbumDetails"
import {map} from "lodash"

export default function AlbumList(){
    const [data, setData] = useState()

    useEffect(() => {
        getMusicAlbums().then((response) => {
            //console.log(response)
            setData(response)
        }) 
    },[])

    //console.log(data, "Hola")

    function RenderItems(data){
            
    }

    return (
        <View>
           {map(data, (item, index) => (
                <AlbumDetails key = {index} item = {item}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({})

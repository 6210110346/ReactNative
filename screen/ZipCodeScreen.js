import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={()=> navigation.navigate('Weather', {zipCode: code,zipPlace: place})}>
        <View style = {styles.zipItem} >
            <Text style = {styles.zipPlace}>{place}</Text>
            <Text style = {styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)
const _keyExtractor = item => item.code

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <FlatList 
                data = {availableZipItems}
                keyExtractor = {_keyExtractor}
                renderItem = {({item}) => <ZipItem {...item} navigation = {navigation}/>}
            /></ImageBackground>
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },
    zipItem:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace:{
        flex: 1,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: 60,
        padding: 20,
        fontSize: 15,
    },
    zipCode:{
        flex: 1,
        color: 'white',
        backgroundColor: 'rgba(1,0,0,0.6)',
        height: 60,
        padding: 20,
        fontSize: 15,
    },
  })
  
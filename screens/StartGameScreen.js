import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'

export default class StartGameScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Comenzar el juego</Text>
                <Card style={styles.inputContainer}>
                    <Text>Elije un numero</Text>
                    <Input/>
                    <View style={styles.buttonContainer}>
                        <Button title='Limpiar' />
                        <Button title='Confirmar' />
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }



})
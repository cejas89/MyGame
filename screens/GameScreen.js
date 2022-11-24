import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState()


    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
      }, []);
      
    /*
    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        const rndNum = Math.floor(Math.random() * (max - min) + min)
        if (rndNum === exclude)
            return generateRandomBetween(min, max, exclude)

        else return rndNum;


    }*/


    return (
        <View style={styles.screen}>
            <Text>La suposicion del Oponente</Text>
            <Text>{currentGuess}</Text>
            <Card style={styles.buttonContainer}>
                <Button title='MENOR' onPress={()=>{}}/>
                <Button title='MAYOR' onPress={()=>{}}/>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }

})
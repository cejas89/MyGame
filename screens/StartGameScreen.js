import { Text, StyleSheet, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native'
import React, { Component, useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'

export default function StartGameScreen(props) {

    const [value, setValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState("");

    const handleConfirmation = () => {
        const choseNumber = parseInt(value);
        if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;

        setConfirmed(true);
        setSelectedNumber(choseNumber);
        setValue("");
        console.log(choseNumber);
    };

    const handleResetInput = () => {
        setValue(" ");
        setConfirmed(false);
        console.log("asdasdas");
    };

    const handleInput = (text) => {
        console.log(text);
        setValue(text.replace(/[^0-9]/g, ""));
        console.log("probando");
    };



    /*
    const handlerInputNumber = (text) => {
        console.log(text);
        setValue(text.replace(/[^0-9]/g, ""));
    }

    const handlerResetInput = () => {
        console.log(value)
        setValue("");
        setConfirmed(false);
    }

    const handlerConfirmInput = () => {
        const choseNumber = parseInt(value);
        if (choseNumber === NaN || choseNumber < 0 || choseNumber > 99)
            return;
        setConfirmed(true);
        setSelectedNumber(parseInt(choseNumber))
        setValue('')
        console.log(parseInt(choseNumber));
    }

*/

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Comenzar el juego</Text>
                <Card style={styles.inputContainer}>
                    <Text>Elije un numero</Text>
                    <Input value={value} onChangeText={handleInput} />
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.cleanButton}
                            onPress={handleResetInput}
                        >
                            <Text style={{ color: "white" }}>Limpiar</Text>
                        </Pressable>
                        <Pressable
                            style={{
                                ...styles.cleanButton,
                                ...styles.confirmButton,
                            }}
                            onPress={handleConfirmation}
                        >
                            <Text style={{ color: "white" }}>Confirmar</Text>
                        </Pressable>

                    </View>
                </Card>

                <Card newStyles={{ marginTop: 50, width: 150 }}>
                    <Text>Tu numero</Text>
                    <Text>{selectedNumber}</Text>
                    <Button
                        title="Empezar juego"
                        onPress={() => props.onStartGame(selectedNumber)}
                    />
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
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
    },
    cleanButton: {
        backgroundColor: "blue",
        height: 35,
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    }



})
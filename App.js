import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';


export default function App() {
  const [userNumber, setUserNumber] = useState();

  const handlerStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame = {handlerStartGame}/>

  if (userNumber) {
    content = <GameScreen/>
  }




  return (
    <View style={styles.container}>
      <Header title={'Adivina el Numero'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

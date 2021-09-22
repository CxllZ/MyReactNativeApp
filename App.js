import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, TextInput} from 'react-native-paper';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const storeData = async (value) => {
  try{
    await AsyncStorage.setItem("myAsyncKey", value)
  } catch(e){
    alert(e)
  }
}

export default App = () => {
  
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter};

  const [response, setResponse] = useState();
  const [name, setName] = useState();

  const getAPIresponse = () => axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(function(response){
    setResponse(response.data.abilities);
    console.log(response.data.abilities);
})

  return (
    <SafeAreaView style={backgroundStyle}>
      <TextInput
      onChangeText={text => setName(text)}
      />
      <Text
      style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>{name}</Text>
      <Button
      mode="outlined"
      onPress={getAPIresponse()}>get api response</Button>
      <Text
      style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>{JSON.stringify(response)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});
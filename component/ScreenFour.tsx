import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const ScreenFour = () => {

    const [name, setName] = useState("adebayo")
    const [age, setAge] = useState(12)

  return (
    <View style={{flex: 1, marginVertical: 30}}>
      <Text>Enter your name:</Text>
      <TextInput placeholder='enter your name' style={styles.input} onChangeText={text => setName(text)} />
        <Text>Enter your age:</Text>
      <TextInput placeholder='enter your age' keyboardType='numeric' style={styles.input} onChangeText={age => setAge(Number(age))} />

      <Text style={{ fontSize: 30}} > My name is {name} </Text>
      <Text style={{ fontSize: 30}} > My name is {age} </Text>
    </View>
  )
}

export default ScreenFour

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        width: 250
    },
})
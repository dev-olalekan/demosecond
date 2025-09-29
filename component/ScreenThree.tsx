import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ScreenThree = () => {

    const [name, setName] = useState("olamide")
    const [age, setAge] = useState(12)

    const changeName = () => {
        setName("olalekan")
        setAge(15)
    }

  return (
    <View>
      <Text style={{fontSize: 40}}>m name is {name}</Text>
      <Text style={{fontSize: 40}}>my age is {age}</Text>
        <Button title="change name" onPress={changeName}/>
    </View>
  )
}

export default ScreenThree

const styles = StyleSheet.create({})
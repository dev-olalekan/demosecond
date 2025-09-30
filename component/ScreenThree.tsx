import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ScreenThree = () => {


  /* using the useState hook */
    const [name, setName] = useState("olamide")
    const [age, setAge] = useState(12)

    const changeName = () => {
        setName("olalekan")
        setAge(15)
    }

    /* using the useEffecr hook */
    const onmounter = () => {
        console.log("app component mounted")
    }

    useEffect(() => {
        onmounter()
    }, [name])



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
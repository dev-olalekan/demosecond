import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ScreenTwo = () => {

  const clickbutton = () => {
    console.log("button clicked")
  }

  /* for touchableopacity */
  const onPress = () => {
    console.log("opacity button pressed")
  }



  return (
    <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "hsl(200, 100%, 50%)",
          }}
        >
          <Text style={styles.text}>one ticket</Text>
          <Text >global ticket</Text>
          <Button title="Click me!" onPress={() => alert("Hello!")} />
          <Button title="press me!" onPress={clickbutton} />
          <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={onPress}>
              <Text>Press Here</Text>
          </TouchableOpacity>
    
          
    
          
        </View>
  )
}

export default ScreenTwo

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "uppercase",
    color: "white",
  },

  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});


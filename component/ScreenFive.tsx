import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const animals = [
        {id: 1, name: "dog", },
        {id: 2, name: "cat", },
        {id: 3, name: "cow",},
        {id: 4, name: "elephant",},
        {id: 5, name: "giraffe",},
        {id: 6, name: "zebra",},
        {id: 7, name: "lion",},
        {id: 8, name: "tiger",},
        {id: 9, name: "bear",},
        {id: 10, name: "fox",},
        {id: 11, name: "lioness",},
        {id: 12, name: "leopard",},
    ]

const ScreenFive = () => {

    const [refreshing, setRefreshing] = useState(false);

    const handleRefreshing = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 3000);
    }
    
  return (
    <View style={styles.container}>

        <FlatList
            data={animals}
            onRefresh={handleRefreshing}
            refreshing={refreshing}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.wrapper} key={item.id}>
                    <Text>{item.name}</Text>
                </View>
            )}

            ItemSeparatorComponent={() => <View style={styles.lineDivider} />}


            ListEmptyComponent={() => <Text>No animal found</Text>}

            ListFooterComponent={() => <Text>End of list</Text>}
            ListHeaderComponent={()=> <Text>head of list</Text>} 
        />


        {/* <ScrollView>
      {animals.map((animal, index) => {
        return (
            <View style={styles.wrapper} key={animal.id}>
                <Text>{animal.name}</Text>
            </View>
        )
      })}
      </ScrollView> */}
    </View>
  )
}

export default ScreenFive

const styles = StyleSheet.create({
    wrapper: {
        padding: 14,
        backgroundColor: "violet",
        borderRadius: 12,
        marginVertical: 14,
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        width: "100%",
    },
    lineDivider:{
        height: 1,
        backgroundColor: "black",
        width: "100%"
    }
})
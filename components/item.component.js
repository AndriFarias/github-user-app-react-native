import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Item({ title, number }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 10,
      },
      circle: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
        backgroundColor: '#560bad',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
      },
      number: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18, 
      },
      title: {
        fontSize: 16, 
        textAlign: 'center',
      },
});

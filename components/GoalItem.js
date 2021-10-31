import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button, Pressable} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const GoalItem = (props) => {
    return (
      <TouchableOpacity activeOpacity={0.8} >
        <View style={styles.listItem}>
          <Text style={styles.text}>{props.title}</Text>
          <Pressable style={styles.button} onPress={props.onDelete.bind(this, props.id)}>
            <Text style={{color:'white'}}>X</Text>
          </Pressable>
        </View>
      </TouchableOpacity>
    )
}


export default GoalItem

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
      flexDirection: 'row',
    },
    text: {
      width: '90%'
    },
    button: {
      backgroundColor: '#C04A30',
      padding: 6
    }
  });
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Pressable, Button} from 'react-native';

const GoalItem = (props) => {
    return (
      <TouchableOpacity activeOpacity={0.8} >
        <View style={styles.listItem}>
          <Text style={styles.text}>{props.title}</Text>
          <Button color="#C04A30" title="X" onPress={props.onDelete.bind(this, props.id)}/>
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
  });
import React, {useState} from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Ajouter une tache" 
                style={styles.input} 
                value={enteredGoal} 
                onChangeText={goalInputHandler}
            />
            <Button title="Ajouter" onPress={props.addGoalHandler.bind(this, enteredGoal)}/>
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center'
    },
    input: {
      width: '70%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    }
  });
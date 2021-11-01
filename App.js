import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };


  return (
    <View style={styles.screen}>
      <Button title="Ajout Nouvelle tache" onPress={()=>setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelAddGoalHandler} />
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData => ( 
        <GoalItem 
          id={itemData.item.id} 
          title={itemData.item.value} 
          onDelete={removeGoalHandler}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
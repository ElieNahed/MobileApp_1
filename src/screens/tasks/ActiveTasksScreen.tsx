import React from 'react';
import {View, ScrollView, Alert} from 'react-native';
import TaskCard from '../../components/organisms/TaskCard';
import Layout from '../../components/atoms/Layout';
import {useTaskContext} from '../../context/TaskContext';

const ActiveTasksScreen = () => {
  const {tasks, completeTask} = useTaskContext();

  const handleCompleteTask = (id: number) => {
    completeTask(id);
  };

  if (tasks.length === 0) {
    Alert.alert(
      'No Active Tasks',
      'There are currently no active tasks.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
    return null;
  }

  return (
    <Layout backgroundColor="#222831" textColor="#EEEEEE">
      <ScrollView>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            onComplete={handleCompleteTask}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default ActiveTasksScreen;

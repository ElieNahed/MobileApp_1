import React from 'react';
import {View, ScrollView, Alert} from 'react-native';
import TaskCard from '../../components/organisms/TaskCard';
import Layout from '../../components/atoms/Layout';
import {useTaskContext} from '../../context/TaskContext';

const CompletedTasksScreen = () => {
  const {completedTasks, moveCompletedToActive} = useTaskContext();

  const handleMoveToActive = (id: number) => {
    moveCompletedToActive(id);
  };

  if (completedTasks.length === 0) {
    Alert.alert(
      'No Completed Tasks',
      'There are currently no completed tasks.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
    return null;
  }

  return (
    <Layout backgroundColor="#222831" textColor="#EEEEEE">
      <ScrollView>
        {completedTasks.map(task => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            onComplete={() => handleMoveToActive(task.id)}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default CompletedTasksScreen;

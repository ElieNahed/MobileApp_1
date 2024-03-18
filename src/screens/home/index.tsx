import React from 'react';
import {View, StyleSheet} from 'react-native';
import TaskForm from '../../components/tempaltes/TaskForm';
import NavMenu from '../../components/molecules/NavMenu';
import {useTaskContext} from '../../context/TaskContext';

const Home = () => {
  const {addTask} = useTaskContext();

  const handleSubmit = (title: string, description: string) => {
    addTask(title, description);
  };

  return (
    <View style={styles.container}>
      <NavMenu />
      <TaskForm onSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
});

export default Home;

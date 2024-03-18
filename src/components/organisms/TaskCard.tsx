import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  onComplete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  onComplete,
}) => {
  const handleComplete = () => {
    onComplete(id);
  };

  return (
    <View
      style={[
        styles.card,
        Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
      ]}>
      <Text style={styles.title}>Task ID: {id}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleComplete}>
          <Text style={styles.buttonText}>Complete Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#76ABAE',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  iosShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  androidShadow: {
    elevation: 5,
  },
});

export default TaskCard;

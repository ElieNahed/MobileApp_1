import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {TaskProvider} from './/src/context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </TaskProvider>
  );
};

export default App;

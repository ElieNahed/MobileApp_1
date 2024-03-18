import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import ActiveTasksScreen from '../screens/tasks/ActiveTasksScreen';
import CompletedTasksScreen from '../screens/tasks/CompletedTaskScreen';

import SettingsScreen from '../screens/settings/settingsScreen';

const MainStackNavigator = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <MainStackNavigator.Screen
        name="ActiveTasks"
        component={ActiveTasksScreen}
        options={{title: 'Active Tasks'}}
      />
      <MainStackNavigator.Screen
        name="CompletedTasks"
        component={CompletedTasksScreen}
        options={{title: 'Completed Tasks'}}
      />

      <MainStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigation;

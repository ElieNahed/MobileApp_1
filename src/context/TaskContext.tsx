import React, {createContext, useContext, useState, ReactNode} from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  completedTasks: Task[];
  theme: string;
  toggleTheme: () => void;
  addTask: (title: string, description: string) => void;
  completeTask: (id: number) => void;
  moveCompletedToActive: (id: number) => void;
}

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  completedTasks: [],
  theme: 'dark',
  toggleTheme: () => {},
  addTask: () => {},
  completeTask: () => {},
  moveCompletedToActive: () => {},
});

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<string>('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id: number) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      const completedTask = tasks[taskIndex];
      setCompletedTasks([...completedTasks, completedTask]);
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const moveCompletedToActive = (id: number) => {
    const taskToMove = completedTasks.find(task => task.id === id);
    if (taskToMove) {
      setTasks([...tasks, taskToMove]);
      setCompletedTasks(completedTasks.filter(task => task.id !== id));
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        completedTasks,
        theme,
        toggleTheme,
        addTask,
        completeTask,
        moveCompletedToActive,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

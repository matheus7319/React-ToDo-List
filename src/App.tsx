import { useEffect, useState } from 'react';
import Tasks from './containers/Tasks';
import TaskForm from './forms/TaskForm';
import { TaskItem } from './models/task.model';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    return () => {
      onLoadTasks();
    };
  }, []);

  const onLoadTasks = () => {
    let myTasks = JSON.parse(localStorage.getItem('_tasks') || '[]');
    setTasks(myTasks);
  }

  return (
    <div className="bg-master">
      <div className="p-2 mb-2 rounded-md" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
        <TaskForm onAddTask={(tasks: any) => { setTasks(tasks) }} />
      </div>
      <Tasks data={tasks} />
    </div>
  )
}

export default App

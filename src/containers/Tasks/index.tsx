import { useEffect, useState } from 'react';
import { TaskItem } from '../../models/task.model';
import Task from './../../components/Task';
import './Tasks.scss';

interface Props {
  data: TaskItem[];
}

function Tasks(props: Props) {
  const { data } = props;
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const noData = !tasks || tasks.length == 0;

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  if (noData) {
    return (
      <ul id="listTasks" className="p-3">
        <li className="items-center">
          <p>Não há tarefas ainda...</p>
        </li>
      </ul>
    )
  }

  return (
    <ul id="listTasks" className="p-2">
      {tasks.length > 0 && tasks.map((item, index) => {
        return (
          <li key={`task-${index}`} className="items-center">
            <Task
              data={item}
              index={index}
              onRemoveTask={(myTasks: TaskItem[]) => { setTasks(myTasks) }}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Tasks;
import { useState } from 'react';
import { TaskItem } from '../../models/task.model';
import './item.scss';

interface Props {
  data: TaskItem,
  index: number,
  onRemoveTask: Function
}

function Task(props: Props) {
  const { data, index } = props;
  const { title, timer, description } = data;
  
  const [playButton, setPlayButton] = useState({
    paused: true,
  });

  const removeTask = (index: number | undefined) => {
    if (index == null || index == undefined) {
      return false;
    }

    let myTasks = JSON.parse(localStorage.getItem('_tasks') || '[]');
    myTasks.splice(index, 1);

    localStorage.removeItem('_tasks');
    localStorage.setItem('_tasks', JSON.stringify(myTasks));

    props.onRemoveTask(myTasks);
  }

  const playTask = () => {
    if (playButton.paused) {

    } else {

    }

    setPlayButton(prev => ({
      ...prev,
      paused: !playButton.paused
    }))
  }

  return (
    <div className="task-item">
      <div className='task-item-header'>
        <div className='task-item-header-start'>
          <p className='task-id'>#{index}</p>
          <h4 className="task-title">{title}</h4>
        </div>
        <div className='task-item-header-end'>
          {timer && (
            <>
              <button className="task-play" onClick={playTask}>
                {playButton.paused && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                )}
                {!playButton.paused && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                )}
              </button>
              <div className='task-timer'>
                <i className='task-timer-icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </i>
                <p className='task-timer-label'>{timer}</p>
              </div>
            </>
          )}
          <button className="task-delete" onClick={() => { removeTask(index) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
      {description && (
        <div className="task-description">
          <p>
            {description}
          </p>
        </div>
      )}
    </div>
  )
}

export default Task
import { useState } from "react";
import MaskedInput from 'react-text-mask';
import "./TaskForm.scss";

interface Props {
  onAddTask: Function
}

function TaskForm(props: Props) {
  const [form, setForm] = useState({});

  const addTask = () => {
    let myTasks = JSON.parse(localStorage.getItem('_tasks') || '[]');
    myTasks.push(form);

    localStorage.removeItem('_tasks');
    localStorage.setItem('_tasks', JSON.stringify(myTasks));
    props.onAddTask(myTasks);
  }

  const onChangeTask = (ev: any) => {
    const { name, value } = ev.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className="flex flex-wrap">
      <div className="flex-1 m-1">
        <label className="sr-only">Dê um nome pra sua tarefa</label>
        <div className="control-group control-group-icon">
          <div className="control-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full py-2 px-3 rounded-md"
            name="title"
            placeholder="Dê um nome pra sua tarefa"
            onChange={(ev: any) => { onChangeTask(ev) }}
          />
        </div>
      </div>
      <div className="flex-1 m-1">
        <label className="sr-only">Quanto tempo vai durar?</label>
        <div className="control-group control-group-icon">
          <div className="control-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <MaskedInput
            mask={[/[0-9]/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]}
            className="w-full py-2 px-3 rounded-md"
            name="timer"
            placeholder="Quanto tempo vai durar?"
            onChange={(ev: any) => { onChangeTask(ev) }}
          />
          {/* <input
            type="text"
            className="w-full py-2 px-3 rounded-md"
            name="timer"
            placeholder="Quanto tempo vai durar?"
            onChange={(ev: any) => { onChangeTask(ev) }}
          /> */}
        </div>
      </div>
      <div className="w-full m-1">
        <label className="sr-only">Quer adicionar mais detalhes?</label>
        <div className="control-group control-group-icon">
          <div className="control-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>
          <textarea
            className="w-full h-full py-2 px-3 rounded-md"
            name="description"
            placeholder="Quer adicionar mais detalhes?"
            onChange={(ev: any) => { onChangeTask(ev) }}
          />
        </div>
      </div>
      <div className="flex-1 m-1">
        <button className="w-full bg-blue-500 text-white rounded-md p-2" onClick={addTask}>Adicionar</button>
      </div>
    </div>
  )
}

export default TaskForm;
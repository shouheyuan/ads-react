import React, { useState, useEffect } from 'react'

import TodoItem from './components/todo-item/TodoItem'
import Router from './router/Router'

import './App.css';
import './styles/mode-layout.css';

const MockData = [
  {
    mode: 1,
    type: "A", name: 'important And Urgent', data: [
      { title: '未达成', status: 'undone' },
      { title: '进行中', status: 'inprogress' },
      { title: '已完成', status: 'done' }
    ]
  },
  {
    mode: 2,
    type: "B", name: 'important but Not Urgent', data: [
      { title: '未达成', status: 'undone' },
      { title: '进行中', status: 'inprogress' },
      { title: '已完成', status: 'done' }
    ]
  },
  {
    mode: 3, type: "C", name: 'Not important and Urgent', data: [
      { title: '未达成', status: 'undone' },
      { title: '进行中', status: 'inprogress' },
      { title: '已完成', status: 'done' }
    ]
  },
  {
    mode: 4, type: "D", name: 'Not important and Not Urgent', data: [
      { title: '未达成', status: 'undone' },
      { title: '进行中', status: 'inprogress' },
      { title: '已完成', status: 'done' }
    ]
  },
]


function App() {
  const defaultMode = 1

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [])

  const [mode, setMode] = useState(defaultMode)
  const [modeIndex, setModeIndex] = useState(defaultMode)
  const [todoType, setTodoType] = useState('A')


  const handleBlockClick = (mode, index) => {
    let i = modeIndex === index ? 0 : index


    setMode(mode)
    setModeIndex(i)
  }


  const todoTypeList = MockData.map((item, index) =>
    <div
      key={item.type}
      className={`box box${index + 1}`}
      onClick={() => { handleBlockClick(item.mode, index + 1) }}>
      <TodoItem item={item}></TodoItem>
    </div>
  )


  return (
    <div className={`App mode${modeIndex}`}>
      <Router />
    </div >
  );
}

export default App;

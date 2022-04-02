import React, { useState, useEffect } from 'react';
import Context from './Context';
import TodoList from './components/TodoList/TodoList';
import Loader from './components/Loader/Loader';
import AddItem from './components/AddItem/AddItem';
import Modal from './components/Modal/Modal';


function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(resp => setData(resp))
      .catch(err => {
        console.log(err)
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      })


  }, [])

  function toggleItem(id){
    setData(data.map(d => {
      if(d.id === id){
        d.completed = !d.completed
      }
      return d
    }))
  }

  function removeItem(id){
    setData(data.filter(todo => todo.id !== id))
  }

  function addItem(title){
    setData(
      data.concat([{ title, id: Date.now(), completed: false}])
    )
  }

  return (
    <Context.Provider value={{removeItem}}>
      <div className='container'>
        <h1>React Todo</h1>
        <Modal />
        <AddItem addItem={addItem}/>
        {data.length ? ( <TodoList data={data} toggleItem={toggleItem}/>) : loading ? (<Loader/>) : (<p>No todos</p>)}
      </div>
    </Context.Provider>
  );
}

export default App;

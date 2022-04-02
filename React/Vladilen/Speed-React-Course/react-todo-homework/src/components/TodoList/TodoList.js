import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';

const styles = {
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  }
}

function TodoList({ data, toggleItem }){
  return (
    <ul style={styles.ul}>
      {
        data.map((d, index) => {
          return (<TodoItem data={d} title={d.title} key={d.id} index={index + 1} id={d.id} onChange={toggleItem}/>)
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleItem: PropTypes.func.isRequired
}

export default TodoList;
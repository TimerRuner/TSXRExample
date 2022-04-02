import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '0'
  }
}

function TodoList(props){
  return (
    <ul style={styles.ul}>
      { props.todos.map((todo, index) => {
        console.log(todo);
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index + 1}
            onChange={props.onToggle}
          />
        )
      }) }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired, //? Вказуємо, що todos - Array<object> і він обов'язковий
  onToggle: PropTypes.func.isRequired
}

export default TodoList;
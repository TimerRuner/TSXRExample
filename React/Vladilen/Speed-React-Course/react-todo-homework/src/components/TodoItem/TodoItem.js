import React, { useContext } from 'react';
import Context from '../../Context';
import PropTypes from 'prop-types';

const styles ={
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}
function TodoItem({ title, index, id, onChange, data }){

  const { removeItem } = useContext(Context);

  const classes = [];

  if(data.completed){
    classes.push('done');
  }

  return (
    <li style={styles.li}>
      <input
        type="checkbox"
        style={styles.input}
        onChange={() => onChange(id)}
        checked={data.completed}
      />
      <span className={classes.join(' ')}>{index} {title}</span>
      <button className='rm' onClick={() => removeItem(id)}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoItem;
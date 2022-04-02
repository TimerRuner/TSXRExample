import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInput() {
  const [value, setValue] = useState('');

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddItem({ addItem }){
  const input = useInput();

  function submitHandler(event){
    event.preventDefault()

    if(input.value().trim()){
      addItem(input.value());
      input.clear();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" {...input.bind}/>
      <button type='submit'>Add todo</button>
    </form>
  )
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
}

export default AddItem;
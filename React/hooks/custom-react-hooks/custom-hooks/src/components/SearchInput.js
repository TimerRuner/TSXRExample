import React, { useState} from "react";
import useDebounce from "../hooks/useDebounce";

const SearchInput = () => {
  const [value, setValue] = useState('')
  const debouncedCallback = useDebounce(search, 500)

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos=`+query)
        .then(response => response.json())
        .then(json => console.log(json))
  }

  function onChange(e) {
    setValue(e.target.value)
    debouncedCallback(e.target.value)
  }

  return (
    <div>
      <input type={'text'} value={value} onChange={onChange}/>
    </div>
  )
}

export default SearchInput
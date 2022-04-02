import React, {useState, useEffect, useRef} from 'react'

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  //! працює, як стейт, змінююич який ми не ререндеримо компоненту
  useEffect(() => {
    renderCount.current++
  })

  //! Збереження попереднього стану за рахунок відсутності ререндеренгу при зміні state
  useEffect(() => {
    prevValue.current = value
  }, [value])

  //! Навішування програмного фокусу
  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  )
}

export default App

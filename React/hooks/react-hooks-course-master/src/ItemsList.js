import React, {useEffect, useState} from 'react'

export default function ItemsList({ getItems }) {
  const [items, setItems] = useState([])

  //! Якщо батьківська компонента перерендиралсь і внесла зміни в getItems, то наш useEffect спрацює
  useEffect(() => {
    const newItems = getItems(42)
    setItems(newItems)
    console.log('render')
  }, [getItems])

  return (
    <ul>
      { items.map(i => <li key={i}>{i}</li>) }
    </ul>
  )
}
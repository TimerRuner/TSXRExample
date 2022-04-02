import React, {useState, useContext} from "react";
import { AlertContext } from "../Context/alert/alertContext";
import { FirebaseContext } from "../Context/firebase/firebaseContext";


export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext)

  const submitHandler = (e) => {
    e.preventDefault();

    if(value.trim()){
      firebase.addNote(value.trim()).then(() => {
        alert.show('Замітка була створена', 'success');
      }).catch(() => {
        alert.show('Щось пішло не так', 'danger');
      });

    } else {
      alert.show('Введіть назву замітки')
    }
    setValue(
     ''
    )
  }

  return(
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type='text'
          className="form-control"
          placeholder="Введіть назву замітки"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}
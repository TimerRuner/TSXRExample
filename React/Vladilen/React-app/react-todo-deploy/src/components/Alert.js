import React, { useContext } from 'react';
import { AlertContext } from '../Context/alert/alertContext';
import {CSSTransition} from 'react-transition-group';

export const Alert = () => {

  const {alert, hide} = useContext(AlertContext);

  if(!alert.visible) {
    return null
  }

  return (
    <CSSTransition
      in={alert.visible}
      timeout={500}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
        <strong className='p-1'>Увага!</strong>
        {alert.text}
        <button onClick={hide} type="button" className="btn-close" aria-label="Close">
        </button>
      </div>
    </CSSTransition>
  )
}
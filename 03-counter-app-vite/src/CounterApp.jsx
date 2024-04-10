import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {

  const [ counter, setCounter ] = useState( value );

  const HandleAdd = () => { 
    setCounter ( counter + 1 );
  }

  const HandelSubs = () => { 
    setCounter ( counter - 1 );
  }

  const HandleReset = () => { 
    setCounter ( value );
  }
  
  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>

    <button onClick={ HandleAdd }> +1 </button>
    <button onClick={ HandelSubs }> -1 </button>
    <button aria-label='btn-reset' onClick={ HandleReset }> Reset </button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}
import React, {useEffect} from 'react';
import '../utils/confetti.css'

const Confetti = ({text}) => {

  useEffect(() => {
  }, [])

  return (
    <div className='bg-confetti-animated'>
      <p> {text} </p>
    </div>
  )
}

export default Confetti
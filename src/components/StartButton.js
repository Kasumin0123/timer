import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectState, start, stop } from '../features/timer/timerSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

const StartButton = () => {
  const running = useSelector(selectState)
  const dispatch = useDispatch()
  return running ? (
    <button
      className="btn btn--stop"
      onClick={() => {
        document.querySelector('.cquarter-circle').classList.remove('inview')
        dispatch(stop())
      }}
    >
      <FontAwesomeIcon icon={faStop} />
    </button>
  ) : (
    <button
      className="btn btn--start"
      onClick={() => {
        document.querySelector('.cquarter-circle').classList.add('inview')
        dispatch(start())
      }}
    >
      <FontAwesomeIcon icon={faPlay} />
    </button>
  )
}

export default StartButton

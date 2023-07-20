import React, { useEffect } from 'react'
import './Main.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  getCurrentTime,
  lap,
  reset,
  selectTime,
} from '../features/timer/timerSlice'
import { toDigit } from '../util/toDigit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft, faFlag } from '@fortawesome/free-solid-svg-icons'
import StartButton from './StartButton'

const Main = () => {
  const current = useSelector(selectTime)
  const dispatch = useDispatch()

  useEffect(() => {
    setInterval(() => {
      dispatch(getCurrentTime())
    }, 10)
  }, [])
  return (
    <div className="main-container">
      <StartButton />
      <button
        className="btn btn--reset"
        onClick={() => {
          dispatch(reset())
          document.querySelector('.cquarter-circle').classList.remove('inview')
        }}
      >
        <FontAwesomeIcon icon={faArrowRotateLeft} />
      </button>
      <button className="btn btn--lap" onClick={() => dispatch(lap())}>
        <FontAwesomeIcon icon={faFlag} />
      </button>
      <div className="circle-container">
        <div className="cquarter-circle"></div>
        <div className="inside-circle"></div>
        <time className="time">{toDigit(current)}</time>
      </div>
    </div>
  )
}

export default Main

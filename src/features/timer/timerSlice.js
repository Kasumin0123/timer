import { createSlice } from '@reduxjs/toolkit'
import Timer from './timer'

const initialState = {
  laps: [],
  running: false,
  current: 0,
}

const timer = new Timer()

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state) => {
      timer.start()
      state.running = true
    },
    stop: (state) => {
      timer.stop()
      state.running = false
    },
    reset: (state) => {
      timer.reset()
      state.laps = []
      state.running = false
    },
    lap: (state) => {
      const lap = timer.lap()
      if (lap) {
        state.laps.push(lap)
      }
    },
    getCurrentTime: (state) => {
      state.current = timer.now()
    },
  },
})

export const { start, stop, reset, lap, getCurrentTime } = timerSlice.actions

export const selectLaps = (state) => state.timer.laps
export const selectState = (state) => state.timer.running
export const selectTime = (state) => state.timer.current

export default timerSlice.reducer

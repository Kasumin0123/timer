import React from 'react'
import './Lap.css'
import Lap_row from './Lap_row'
import { useSelector } from 'react-redux'
import { selectLaps } from '../features/timer/timerSlice'
import { toDigit } from '../util/toDigit'
const Lap = () => {
  const laps = useSelector(selectLaps)
  return (
    <div className="lap">
      <div className="vertical-table">
        <table className="vertical-table__inner">
          <thead className="vertical-table__headers">
            <tr className="vertical-table__header-row">
              <th className="vertical-table__header">ラップ</th>
              <th className="vertical-table__header">時間</th>
              <th className="vertical-table__header">合計時間</th>
            </tr>
          </thead>
          <tbody className="vertical-table__body">
            {laps.map((lap) => {
              return (
                <Lap_row
                  key={lap.lap}
                  lap={lap.lap}
                  interval={toDigit(lap.interval)}
                  total={toDigit(lap.total_time)}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Lap

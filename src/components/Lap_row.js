import React from 'react'

const Lap_row = ({ lap, interval, total }) => {
  return (
    <tr className="vertical-table__body-row">
      <td className="vertical-table__text">{lap}</td>
      <td className="vertical-table__text">{interval}</td>
      <td className="vertical-table__text">{total}</td>
    </tr>
  )
}

export default Lap_row

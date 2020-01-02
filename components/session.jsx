import React from 'react'
import { formatTime, getDayName, getFullDate } from '../utils/formatters'

const Session = ({
  name,
  startDate,
  endDate,
}) => {
  const startTimeFormatted = formatTime(startDate)
  const endTimeFormatted = formatTime(endDate)

  return (
    <li>
      <span>
        {name}
      </span>
      <span>
        <time className="day" dateTime={getFullDate(startDate)}>
          {getDayName(startDate)}
        </time>
        <time dateTime={getFullDate(startDate)}>
          {startTimeFormatted}
        </time>
        &nbsp;-&nbsp;
        <time dateTime={getFullDate(endDate)}>
          {endTimeFormatted}
        </time>
      </span>

      <style jsx>{`
        li {
          display: flex;
          justify-content: space-between;
        }

        .day {
          width: 5rem;
          display: inline-block;
        }
        `}</style>
    </li>
  )
}

export default Session

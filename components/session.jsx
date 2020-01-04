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
      <span className="session__title">
        {name}
      </span>
      <time className="session__day" dateTime={getFullDate(startDate)}>
        {getDayName(startDate)}
      </time>
      <span className="session__time">
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
          padding: 4px 8px;
        }

        li:nth-child(odd) {
          background: #f0f0f0;
        }

        li:last-child {
          font-weight: 600;
        }

        .session__title {
          width: 50%;
        }

        .session__day {
          width: 50%;
        }

        .session__time {
          width: 5rem;
        }
        `}</style>
    </li>
  )
}

export default Session

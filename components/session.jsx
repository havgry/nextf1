import React, { Fragment } from 'react'
import { formatTime, getFullDate } from '../utils'
import { SESSIONS } from '../utils/enums'

const Session = ({
  type,
  startDate,
  endDate,
}) => {
  const startTimeFormatted = formatTime(startDate)
  const endTimeFormatted = formatTime(endDate)

  return (
    <li key={type}>
      <span className="session__title">
        {SESSIONS[type]}
      </span>
      <span className="session__time">
        <time dateTime={getFullDate(startDate)}>
          {startTimeFormatted}
        </time>
        {type !== 'R' &&
          <Fragment>
            &nbsp;-&nbsp;
            <time dateTime={getFullDate(endDate)}>
              {endTimeFormatted}
            </time>
          </Fragment>
        }
      </span>

      <style jsx>{`
        li {
          display: flex;
          justify-content: space-between;
        }

        .session__title {
          width: 8rem;
        }

        .session__time {
          width: 6rem;
        }
        `}</style>
    </li>
  )
}

export default Session

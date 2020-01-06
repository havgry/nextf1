import React, { Fragment } from 'react'
import { formatTime, getFullDate, timeFromNow } from '../utils'
import { SESSIONS, STATUS } from '../utils/enums'

const Session = ({
  type,
  startDate,
  endDate,
  status,
}) => {
  const startTimeFormatted = formatTime(startDate)
  const endTimeFormatted = formatTime(endDate)

  return (
    <li key={type} title={`Starts ${timeFromNow(startDate)}`}>
      <span className="session__title">
        {SESSIONS[type]}
      </span>
      <span className="session__time">
        {status === STATUS.TBA
          ? <span title="To be announced">
              TBA
            </span>
          : <Fragment>
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
          width: 5rem;
          flex-shrink: 0;
        }
        `}</style>
    </li>
  )
}

export default Session

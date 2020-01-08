import React, { useState } from 'react'
import { UnmountClosed as Collapse } from 'react-collapse'
import Session from './session'
import { getDate, getFullDate, groupByDayName, getStartEndDates } from '../utils'
import { STATUS } from '../utils/enums'

const Event = ({
  country,
  city,
  timezone,
  sessions,
  isExpanded,
  status,
}) => {
  const firstSessionStart = sessions[0].startDate
  const lastSessionStart = sessions[sessions.length - 1].startDate
  const [isVisible, setVisibility] = useState(isExpanded)
  const toggleVisibility = (event) => {
    event.preventDefault()
    setVisibility(!isVisible)
  }
  const sessionsByDay = groupByDayName(sessions, timezone)
  const startEndDates = getStartEndDates(firstSessionStart, lastSessionStart, timezone)
  return (
    <section>
      <header>
        <a
          href="#"
          onClick={toggleVisibility}
        >
          <div>
            <h1>
              {country}
            </h1>
            <span className="area">
              {city}
            </span>
          </div>
          <div>
            <time dateTime={getFullDate(firstSessionStart, timezone)}>
              {startEndDates[0]}
            </time>
            &nbsp;-&nbsp;
            <time dateTime={getFullDate(lastSessionStart, timezone)}>
              {startEndDates[1]}
            </time>
          </div>
        </a>
      </header>
      <main className={`main main--${isVisible ? 'visible' : 'hidden'}`}>
        <Collapse isOpened={isVisible}>
          <ol className="sessions-list">
            {Object.keys(sessionsByDay).map((day) => {
              const dailySessions = sessionsByDay[day]
              return (
                <li key={day}>
                  <span>
                    {day}, {getDate(dailySessions[0].startDate, timezone)}
                  </span>
                  <ol className="sessions">
                    {dailySessions.map((session) => {
                      return (
                        <Session
                          key={session.type}
                          type={session.type}
                          startDate={session.startDate}
                          endDate={session.endDate}
                          status={status}
                          timezone={timezone}
                        />
                      )
                    })}
                  </ol>
                </li>
              )}
            )}
          </ol>
          {status === STATUS.UNCONFIRMED &&
            <footer>
              <div className="footer-container">  
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon">
                  <path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span title="Preliminary session times are based on 2019 schedule">
                  Session times yet to be confirmed for 2020
                </span>
              </div>
            </footer>
          }
        </Collapse>
      </main>
      <style jsx>{`
        h1 {
          margin: 0;
          font-size: 1.3rem;
        }

        time {
          width: 5rem;
          text-transform: uppercase;
          line-height: 2.3rem;
        }

        .area {
          text-transform: uppercase;
        }

        a {
          padding: 0.5rem 0;
          color: inherit;
          text-decoration: none;
          display: flex;
          justify-content: space-between;
        }

        a:hover {
          color: #1e41ff;
        }

        .main {
          transition: opacity .35s ease;
        }

        .main--hidden {
          opacity: 0;
        }

        .main--visible {
          opacity: 1;
        }

        li {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
        }

        li:last-child {
          font-weight: 600;
        }

        .sessions {
          width: 60%;
        }

        .sessions-list {
          font-size: 0.8rem;
          text-transform: uppercase;
          padding: 0.5rem 0;
        }

        section {
          border-bottom: 1px solid #d4d4d4;
        }

        footer {
          padding-bottom: 1rem;
        }

        .footer-container {
          background: #f0f0f0;
          padding: 4px 10px 4px 8px;
          display: inline-flex;
          align-items: center;
          font-size: 0.8rem;
          border-radius: 15px;
        }

        .icon {
          color: #e10400;
          width: 15px;
          height: 15px;
          display: inline-block;
          margin-right: 5px;
        }
      `}</style>
      <style>{`
        .ReactCollapse--collapse {
          transition: height .35s ease;
        }
      `}
      </style>
    </section>
  )
}

export default Event

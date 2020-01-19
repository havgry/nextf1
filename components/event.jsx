import React, { useState } from 'react'
import { UnmountClosed as Collapse } from 'react-collapse'
import Session from './session'
import Warning from './warning'
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
              <Warning
                text="Session times yet to be confirmed for 2020"
                title="Preliminary session times are based on 2019 schedule"
              />
            </footer>
          }
          {status === STATUS.TBA &&
            <footer>
              <Warning
                text="New Grand Prix! Session times yet to be announced"
              />
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

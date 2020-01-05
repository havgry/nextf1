import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import Session from './session'
import { getDate, getFullDate, groupByDayName } from '../utils'

const Event = ({
  country,
  city,
  sessions,
  isExpanded,
}) => {
  const raceStartDate = sessions[sessions.length - 1].startDate
  const [isVisible, setVisibility] = useState(isExpanded)
  const toggleVisibility = (event) => {
    event.preventDefault()
    setVisibility(!isVisible)
  }
  const sessionsByDay = groupByDayName(sessions)
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
          <time dateTime={getFullDate(raceStartDate)}>
            {getDate(raceStartDate)}
          </time>
        </a>
      </header>
      <Collapse isOpened={isVisible}>
        <main>
          <ol>
            {Object.keys(sessionsByDay).map((day) => {
              const dailySessions = sessionsByDay[day]
              return (
                <li key={day}>
                  <span>
                    {day}, {getDate(dailySessions[0].startDate)}
                  </span>
                  <ol className="sessions">
                    {dailySessions.map((session) => {
                      return (
                        <Session
                          key={session.type}
                          type={session.type}
                          startDate={session.startDate}
                          endDate={session.endDate}
                        />
                      )
                    })}
                  </ol>
                </li>
              )}
            )}
          </ol>
        </main>
      </Collapse>

      <style jsx>{`
        h1 {
          margin: 0;
          font-size: 1.3rem;
        }

        time {
          width: 5rem;
          text-transform: uppercase;
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

        main {
          font-size: 0.8rem;
          text-transform: uppercase;
          padding: 0.5rem 0;
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

        section {
          border-bottom: 1px solid #cecece;
        }

        section:hover {
          border-color: #000;
        }
      `}</style>
      <style>{`
        .ReactCollapse--collapse {
          transition: height .25s ease;
        }
      `}
      </style>
    </section>
  )
}

export default Event

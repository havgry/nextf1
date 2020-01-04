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
        <h1>
          <a
            href="#"
            onClick={toggleVisibility}
          >
            {country} - {city}
          </a>
          <time dateTime={getFullDate(raceStartDate)}>
            {getDate(raceStartDate)}
          </time>
        </h1>
      </header>
      <Collapse isOpened={isVisible}>
        <main>
          <ol>
            {Object.keys(sessionsByDay).map((day) => (
              <li key={day}>
                <span>
                  {day}
                </span>
                <ol className="sessions">
                  {sessionsByDay[day].map((session) => {
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
            ))}
          </ol>
        </main>
      </Collapse>

      <style jsx>{`
        h1 {
          display: flex;
          justify-content: space-between;
        }

        a {
          color: inherit;
        }

        a:hover {
          text-decoration: none;
        }

        main {
          font-size: 0.8rem;
          text-transform: uppercase;
        }

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

        .sessions {
          width: 60%;
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

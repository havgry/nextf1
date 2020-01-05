import React from 'react'
import Event from './event'

const List = ({
  items,
}) => (
  <ol>
    {items.map((event, index) => (
      <li key={event.country}>
        <Event
          country={event.country}
          city={event.city}
          sessions={event.sessions}
          isExpanded={index === 0}
          status={event.status}
        />
      </li>
    ))}
  </ol>
)

export default List

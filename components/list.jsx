import React from 'react'
import Event from './event'

const List = ({
  items,
  expandFirstItem,
}) => (
  <ol>
    {items.map((event, index) => (
      <li key={event.sessions[0].startDate}>
        <Event
          country={event.country}
          city={event.city}
          sessions={event.sessions}
          isExpanded={expandFirstItem && index === 0}
          status={event.status}
          timezone={event.timezone}
        />
      </li>
    ))}
  </ol>
)

export default List

import spacetime from 'spacetime'
import ReactGA from 'react-ga'

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getTimeZoneName = (() => {
  let cachedVal
  const getAndSetTimeZoneName = () => {
    if (cachedVal) {
      return cachedVal
    }

    cachedVal = spacetime().timezone().name
    return cachedVal
  }
  return getAndSetTimeZoneName
})()

const getSpacetimeInTimeZone = (dateTime, initialTimezone) => {
  const currentTimeZone = getTimeZoneName()
  return spacetime(dateTime, initialTimezone).goto(currentTimeZone)
}

export const formatTime = (dateTime, initialTimezone) => {
  return getSpacetimeInTimeZone(dateTime, initialTimezone).format('{hour-24-pad}:{minute-pad}')
}

export const getDayName = (dateTime, initialTimezone) => {
  const dayName = getSpacetimeInTimeZone(dateTime, initialTimezone).format('day-short')
  return capitalize(dayName)
}

export const getDate = (dateTime, initialTimezone) => {
  return getSpacetimeInTimeZone(dateTime, initialTimezone).format('{date} {month-short}')
}

export const getFullDate = (dateTime, initialTimezone) => {
  return getSpacetimeInTimeZone(dateTime, initialTimezone).format('nice')
}

export const groupByDayName = (sessions, timezone) => {
  return sessions.reduce((groups, session) => {
    const group = getDayName(session.startDate, timezone)
    groups[group] = groups[group] || []
    groups[group].push(session)
    return groups
  }, {})
}

export const timeFromNow = (dateTime, initialTimezone) => {
  const now = spacetime(new Date())
  const future = getSpacetimeInTimeZone(dateTime, initialTimezone)
  return now.since(future).precise
}

export const getStartEndDates = (dateTimeStart, dateTimeEnd, initialTimezone) => {
  const start = getSpacetimeInTimeZone(dateTimeStart, initialTimezone)
  const end = getSpacetimeInTimeZone(dateTimeEnd, initialTimezone)
  const isSameMonth = start.isSame(end, 'month')
  const startDateFormatted = isSameMonth ? start.format('date') : start.format('{date} {month-short}')
  const endDateFormatted = end.format('{date} {month-short}')

  return [startDateFormatted, endDateFormatted]
}
 
export const initGA = () => {
  ReactGA.initialize(process.env.GA_TRACKING_ID)
}
 
export const trackPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

import './index.css'

const EventItem = props => {
  const {eventDetails, eventClicked, isClicked} = props
  const {id, imageUrl, name, location} = eventDetails

  const onEventClicked = () => {
    eventClicked(id)
  }

  const border = isClicked && 'clicked'

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onEventClicked}>
        <img src={imageUrl} alt="event" className={`event-image ${border}`} />
      </button>

      <div className="event-details">
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem

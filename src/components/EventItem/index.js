import './index.css'

const EventItem = props => {
  const {eventDetails, eventClicked} = props
  const {id, imageUrl, name, location} = eventDetails

  const onEventClicked = () => {
    eventClicked(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onEventClicked}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>

      <div className="event-details">
        <h3 className="event-name">{name}</h3>
        <p className="event-location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem

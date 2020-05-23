import React from 'react';
import PropTypes from 'prop-types';

const dateToHHMM = (date) => {
  return "" + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
};

class ConsuoReactUpNext extends React.Component {
  constructor(props) {
    super(props);

    this.apiUrl = props.apiUrl;
    this.state = {
      channelId: props.channelId,
      eventNow: null,
      eventNext: null
    }
  }

  update() {
    let { channelId } = this.state;
    const now = Date.now();

    fetch(this.apiUrl + "/channels/" + channelId + "/schedule" + "?start=" + (now - 3600 * 1000))
    .then(res => res.json())
    .then(events => {
      const eventNowIdx = events.findIndex(event => event.start_time <= now && now < event.end_time);
      let eventNow = events[eventNowIdx];
      let eventNext = events[eventNowIdx + 1];
      if (eventNow && eventNext) {
        eventNow.timeStart = new Date(eventNow.start_time);
        eventNow.timeEnd = new Date(eventNow.end_time);
        eventNext.timeStart = new Date(eventNext.start_time);
        eventNext.timeEnd = new Date(eventNext.end_time);
        console.log(eventNow, eventNext);
        const newState = {
          ...this.state,
          eventNow: eventNow,
          eventNext: eventNext
        };
        this.setState(newState);
      }
    });
  }

  componentDidMount() {
    this.update();
  }

  render () {
    let { eventNow, eventNext } = this.state;

    return (
      <div className={"consuo-up-next-container"}>
        { eventNow ?
          <div className={"consuo-now"}>
            <p>{dateToHHMM(eventNow.timeStart)} - {dateToHHMM(eventNow.timeEnd)}</p>
            <h2>Now: {eventNow.title}</h2>
          </div>
        : null }
        { eventNext ?
          <div className={"consuo-next"}>
            <p>Next: {eventNext.title} ({dateToHHMM(eventNext.timeStart)} - {dateToHHMM(eventNext.timeEnd)})</p>
          </div>
        : null }
      </div>
    )
  }
}

ConsuoReactUpNext.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
};

export default ConsuoReactUpNext;
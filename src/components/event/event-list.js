import EventItem from "./event-item";
export default function EventList(props){

    const { events } = props;
    return (
      <ul className=" w-4/5 max-w-2xl my-20 mx-auto">
        {events.map((event) => (
          <EventItem id={event.id} title={event.title} date={event.date} location={event.location} image={event.image} key={event.id} />
        ))}
      </ul>
    );
}


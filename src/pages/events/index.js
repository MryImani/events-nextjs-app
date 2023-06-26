import EventList from "@/components/event/event-list";
import { getAllEvents } from "../../../dummy-data";
import EventSearch from "@/components/event/event-search";

export default function AllEvents() {
  const allEvents = getAllEvents();
  return (
    <div className="">
      <EventSearch/>
      <EventList events={allEvents} />
    </div>
  );
}

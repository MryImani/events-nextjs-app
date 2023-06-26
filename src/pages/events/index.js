import EventList from "@/components/event/event-list";
import { getAllEvents } from "../../../dummy-data";

export default function AllEvents() {
  const allEvents = getAllEvents();
  return (
    <div className="">
      <EventList events={allEvents} />
    </div>
  );
}

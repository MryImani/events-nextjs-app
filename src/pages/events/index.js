import EventList from "@/components/event/event-list";
import { getAllEvents } from "../../../dummy-data";
import EventSearch from "@/components/event/event-search";
import { useRouter } from "next/router";

export default function AllEvents() {
  const allEvents = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year,month){
    const path = `/events/${year}/${month}`
  router.push(path);
  }
  return (
    <div className="">
      <EventSearch onSearch={findEventsHandler}/>
      <EventList events={allEvents} />
    </div>
  );
}

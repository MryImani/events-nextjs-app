import EventList from "@/components/event/event-list";
import { getFeaturedEvents } from "../../dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <main className="">
      <EventList events={featuredEvents} />
    </main>
  );
}

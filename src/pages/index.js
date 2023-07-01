import EventList from "@/components/event/event-list";
import { getFeaturedEvents } from "../../dummy-data";
import NewsletterRegistration from "@/components/input/newsletter-registration";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <main className="">
      <NewsletterRegistration/>
      <EventList events={featuredEvents} />
    </main>
  );
}

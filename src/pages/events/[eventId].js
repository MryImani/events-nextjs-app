import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import EventContent from "@/components/event/event-detail/event-content";
import EventLogistics from "@/components/event/event-detail/event-logistics";
import EventSummary from "@/components/event/event-detail/event-summary";
import CommentList from "@/components/input/comment-list";
import Comments from "@/components/input/comments";
export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>Event not found</p>;
  }
  return (
    <div className="">
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description} </EventContent>
      <Comments eventId={eventId} />
    </div>
  );
}

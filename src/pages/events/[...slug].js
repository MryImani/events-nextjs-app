import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "@/components/event/event-list";
import Button from "@/components/ui/button";

export default function FilteredEventsPage() {
  const router = useRouter();
 const filterDate = router.query.slug;
 const year = filterDate[0];
 const month = filterDate[1];

 const numYear = +year;
 const numMonth = +month;
  const events = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if(!events || events.length === 0)
  {
    return (
      <div className="container m-auto text-center p-16">
        <p className="text-2xl my-11">No events found for the chosen filter! </p>
        <Button link="/events">Try again</Button>
      </div>
    );
  }

  const date = new Date(numYear, numMonth-1);
  const formattedDate = date.toLocaleDateString("en-US", {
    year : "numeric",
    month : "long"
  });
  return (
    <div className="">
      <div className="containet mx-auto m-24 text-center">
        <h1 className="font-bold my-11 text-3xl">Events in {formattedDate}</h1>
        <Button link="/events">Show all events</Button>
      </div>
      <EventList events={events} />
    </div>
  );
}

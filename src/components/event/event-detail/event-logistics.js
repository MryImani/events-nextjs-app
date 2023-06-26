import { ImCalendar, ImLocation } from "react-icons/im";
import classes from "./event-logistics.module.css";
import LogisticsItem from "./logistics-item"

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={`${classes.logistics} shadow-md rounded-md bg-gray-900 max-w-3xl w-4/5 -my-12 p-8 mx-auto flex flex-col items-center justify-between gap-4 text-slate-600 md:flex-row`}>
      <div className={`${classes.image} w-40 h-40 rounded-full overflow-hidden border-4 border-white`}>
        <img className="w-40 h-40 object-cover" src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={`${classes.list} flex-1 flex flex-col gap-8 justify-around items-center `}>
        <LogisticsItem icon={ImCalendar}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={ImLocation}>
          <address className=" whitespace-pre">{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;


import { ImCalendar, ImArrowRight, ImLocation } from "react-icons/im";
import Button from "../ui/button";
export default function EventItem(props) {
  const { id, title, location, date, image } = props;

  const dateFormatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const addressFormatted = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className="flex flex-wrap md:flex-nowrap shadow-md rounded-lg overflow-hidden bg-white m-4 gap-4">
      <img
        className=" h-52 w-full md:w-2/5 object-fill"
        src={"/" + image}
        alt={title}
      />
      <div className="flex flex-col w-full md:w-3/5 px-4">
        <div className="">
          <h2 className="font-bold text-xl my-2 mx-0">{title}</h2>
          <h3 className="flex items-center  gap-2 font-bold text-gray-400">
            <ImCalendar />
            <span>{dateFormatted}</span>
          </h3>
          <p className="flex items-center gap-2 my-2 mx-0  text-gray-400 whitespace-pre">
            <ImLocation />
            <span> {addressFormatted} </span>
          </p>
        </div>
        <div className="flex justify-center my-4 md:justify-end ">
          <Button link={exploreLink}>
            <span className="flex items-center">
              <span>Explore Event</span>
              <span className="mx-1">
                <ImArrowRight />
              </span>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

import Link from "next/link";
export default function EventItem(props) {
  const { id, title, location, date, image } = props;

  const dateFormatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  const addressFormatted = location.replace(',','\n');
  const exploreLink = `/events/${id}`;
  return (
    <li className="flex flex-wrap md:flex-nowrap shadow-md rounded-lg overflow-hidden bg-white m-4 gap-4">
      <img className=" h-48 w-full" src={"/" + image} alt={title} />
      <div className="flex flex-col w-full px-4 text-center">
        <div className="">
          <h2 className="font-bold text-xl my-2 mx-0">{title}</h2>
          <h3 className="font-bold text-gray-400">
            {dateFormatted}
          </h3>
          <p className="my-2 mx-0  text-gray-400 whitespace-pre">
            {addressFormatted}
          </p>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

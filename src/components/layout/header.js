import Link from "next/link";

export default function Header(){
    return (
      <header className="flex justify-between items-center py-5 px-5 md:px-32 bg-gray-900  text-white">
        <div>
          <h1 className="font-bold text-2xl">
            <Link href="/">NextEvents</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
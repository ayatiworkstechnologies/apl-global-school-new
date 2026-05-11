import React, { useState } from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import EventImage1 from '/assets/event-1.png';
import EventImage2 from '/assets/event-2.png';


const Events = [
  {
    id: 1,
    time: '8:30am - 11:00am',
    date: '15th July, 2025',
    title: 'Cambridge Outstanding Learner Awards',
    attendees: [
      'https://i.pravatar.cc/32?img=11',
      'https://i.pravatar.cc/32?img=12',
      'https://i.pravatar.cc/32?img=13',
    ],
    moreCount: 40,
    image: EventImage2,
  },
  {
    id: 2,
    time: '10:00am - 1:00pm',
    date: '5th August, 2025',
    title: 'APL EVENTS',
    attendees: [
      'https://i.pravatar.cc/32?img=14',
      'https://i.pravatar.cc/32?img=15',
      'https://i.pravatar.cc/32?img=16',
    ],
    moreCount: 40,
    image: EventImage1,
  }
];

const pageSize = 3;

export default function EventList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Events.length / pageSize);

  const paginatedEvents = Events.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="space-y-8">
        {paginatedEvents.map((event) => (
          <div
          key={event.id}
          className="bg-white rounded-md shadow-xl p-4 grid grid-cols-12 gap-4 items-center"
        >
          {/* Image - col-span-2 */}
          <div className="col-span-12 sm:col-span-2 h-48 sm:h-28">
            <img
              src={event.image}
              alt="Event"
              className="w-full h-full object-cover rounded-xl "
            />
          </div>

          {/* Event Details - col-span-5 */}
          <div className="col-span-12 sm:col-span-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-red-500" />
                {event.time}
              </span>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                {event.date}
              </span>
            </div>
            <p className="text-base sm:text-lg font-primary text-gray-800 leading-snug">
              {event.title}
            </p>
          </div>

          {/* Divider Line - col-span-1 */}
          <div className="hidden sm:block col-span-1 h-20 border-l border-gray-300 mx-auto" />

          {/* Ticket & Attendees - col-span-4 */}
          <div className="col-span-12 sm:col-span-2 flex flex-col items-start sm:items-end gap-4">
            {/* <button className="border border-gray-400 text-blue-600 px-4 py-1 font-primary rounded-full text-sm hover:bg-secondary hover:text-white">
              Buy Tickets
            </button> */}
            <div className="flex items-center -space-x-2">
              {event.attendees.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-medium border-2 border-white z-10">
                {event.moreCount}+
              </span>
              <span className="text-blue-500 text-xs pl-2 z-10">More</span>
            </div>
          </div>
        </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="text-xl text-secondary hover:text-secondary disabled:opacity-50"
          disabled={currentPage === 1}
        >
          &larr;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded-full text-sm font-semibold transition ${
              currentPage === i + 1
                ? 'bg-third text-white'
                : 'text-gray-700 hover:text-third hover:ring-2 hover:ring-third'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="text-xl text-secondary hover:text-secondary disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

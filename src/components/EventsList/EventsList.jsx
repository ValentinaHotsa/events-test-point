import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import css from "./EventsList.module.css";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const result = await axios.get("http://localhost:8888/api/events");
        setEvents(result.data);
      } catch (error) {
        console.error("Error getting events", error.message);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className={css.listContainer}>
      <h1 className={css.titlePage}>Event list</h1>
      <ul className={css.eventsList}>
        {events.map((event) => (
          <li key={event._id}>
            <EventCard key={event._id} data={event}>
              {event.name}
            </EventCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;

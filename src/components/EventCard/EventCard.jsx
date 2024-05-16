import { Link } from "react-router-dom";

import css from "./EventCard.module.css";
const EventCard = ({ data }) => {
  const { name, date, _id, organizer, description, registeredUsers } = data;

  return (
    <div className={css.containerCard}>
      <h3 className={css.nameEvent}>{name}</h3>
      <h4 className={css.dateEvent}>{date}</h4>
      <p className={css.descriptionEvent}>{description}</p>
      <p className={css.organizerEvent}>
        Organizer: <span>{organizer}</span>{" "}
      </p>
      <div className={css.linkWraper}>
        <Link to={`/register/${_id}`} className={css.linkEvent}>
          Register to event
        </Link>
        <Link to={`/participants/${_id}`} className={css.linkEvent}>
          List of participants
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

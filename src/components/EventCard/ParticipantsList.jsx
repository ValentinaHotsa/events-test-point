import { Link } from "react-router-dom";
import css from "./EventCard.module.css";

const ParticipantsList = ({ participants }) => {
  return (
    <div className={css.partContainer}>
      <h2 className={css.partTitle}>List of participants </h2>

      <ul className={css.partList}>
        {participants.map((user) => (
          <li className={css.partItem} key={user._id}>
            <h5>{user.fullName}</h5>
            <h6>{user.email}</h6>
          </li>
        ))}
      </ul>

      <Link to="/" className={css.linkBack}>
        Back to events list
      </Link>
    </div>
  );
};

export default ParticipantsList;

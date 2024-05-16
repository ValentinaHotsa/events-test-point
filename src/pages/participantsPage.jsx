import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ParticipantsList from "../components/EventCard/ParticipantsList";

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/api/events/${eventId}`
        );
        setParticipants(response.data.registeredUsers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching participants:", error.message);
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ParticipantsList participants={participants} />;
};
export default Participants;

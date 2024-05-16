import { useParams } from "react-router";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
  const { eventId } = useParams();
  return <RegisterForm eventId={eventId} />;
};
export default Register;

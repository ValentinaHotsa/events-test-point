import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import css from "./RegisterForm.module.css";
const RegisterForm = ({ eventId }) => {
  const initialStateForm = {
    fullName: "",
    email: "",
    birthDate: "",
    source: "",
  };

  const [formData, setFormData] = useState(initialStateForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8888/api/events/${eventId}/register`,
        formData
      );

      swal(
        "You are successfully registered. We are waiting for you at the event!",
        "",
        "success"
      );
      setFormData(initialStateForm);
      navigate("/");
    } catch (error) {
      console.error("Error registering user", error.message);
      swal(
        "Something went wrong, please check your data and try again",
        "",
        "error"
      );
    }
  };
  return (
    <div className={css.containerForm}>
      <h2 className={css.registerTitle}>Registration for the event</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Full name
          <input
            className={css.registerInput}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label className={css.label}>
          Email
          <input
            className={css.registerInput}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={css.label}>
          Date of birth
          <input
            className={css.registerInput}
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </label>
        <span className={css.spanQuest}>
          Where did you hear about this event?
        </span>
        <fieldset className={css.fieldsetRadio}>
          <label className={css.labelRadio}>
            Social media
            <input
              type="radio"
              id="source1"
              name="source"
              value="Social media"
              onChange={handleChange}
            />
          </label>
          <label className={css.labelRadio}>
            Friends
            <input
              type="radio"
              id="ource2"
              name="source"
              value="Friends"
              onChange={handleChange}
            />
          </label>
          <label className={css.labelRadio}>
            Found myself
            <input
              type="radio"
              id="ource3"
              name="source"
              value="Found myself"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button className={css.submitButton} type="submit">
          Register
        </button>
      </form>
      <Link to="/" className={css.linkBack}>
        Back to events list
      </Link>
    </div>
  );
};

export default RegisterForm;

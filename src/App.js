import { Route, Routes } from "react-router";
import "./App.css";
import Events from "./pages/eventsPage.jsx";
import Register from "./pages/registerPage.jsx";
import Participants from "./pages/participantsPage.jsx";
import NotFound from "./pages/notFoundPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/register/:eventId" element={<Register />} />
        <Route path="/participants/:eventId" element={<Participants />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

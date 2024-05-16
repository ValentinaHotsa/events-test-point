import Event from "../model/eventModel.js";

export const getAllEvents = async (req, res) => {
  try {
    const result = await Event.find().populate({
      path: "registeredUsers",
      select: "fullName email birthDate source",
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting events", error.message);
  }
};

export const getEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id).populate({
      path: "registeredUsers",
      select: "fullName email birthDate source",
    });
    // console.log(event);
    if (!event) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Event not found",
        data: "Not Found",
      });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error getting event", error.message);
  }
};

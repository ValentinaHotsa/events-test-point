import User from "../model/userModel.js";
import Event from "../model/eventModel.js";

const register = async (req, res) => {
  const { fullName, email, birthDate, source } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findOne({ email });
    // if (user !== null) {
    //   return res.status(409).json({
    //     status: "error",
    //     code: 409,
    //     message: "Email is already in use",
    //     data: "Conflict",
    //   });
    // }
    const newUser = await User.create({
      fullName,
      email,
      birthDate,
      source,
    });
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Event not found",
        data: "Not Found",
      });
    }
    event.registeredUsers.push(newUser._id);
    await event.save();

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        message: "Registration successful",
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default register;

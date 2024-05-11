// import asyncHandler from "../utils/AsyncHandler";

// export const addMeeting = asyncHandler(async (req, res) => {
//   const { property_id, date, time } = req.body;

//   // Create a new Meet document
//   const newMeeting = new Meet({
//     property_id,
//     date,
//     time,
//   });

//   const savedMeeting = await newMeeting.save();

//   res.status(201).json(savedMeeting);

//   console.error("Error adding meeting:", error);
//   res.status(500).json({ message: "Failed to add meeting" });
// });

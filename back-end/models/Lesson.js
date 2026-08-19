const mongoose = require("mongoose");
const lessonSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    title: { type: String, required: true },
    description: { type: String },
    videoUrl: { type: String, required: true },
    order: { type: Number },
    unlocked: { type: Boolean, default: false }, 
    subtitles: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model("Lesson", lessonSchema);

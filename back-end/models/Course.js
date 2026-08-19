const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        thumbnail: { type: String }, 
        price: { type: Number, default: 0 }, 
        duration: { type: Number }, 
        lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }], 
        prerequisites: [String], 
        courseLevel: { 
            type: String, 
            enum: ["Beginner", "Intermediate", "Advance"], 
            default: "Beginner" 
        },
        certificationAvailable: { type: Boolean, default: false },
        reviews: [{ 
            userId: mongoose.Schema.Types.ObjectId, 
            comment: String, 
            rating: Number 
        }],

        
        status: { 
            type: String, 
            enum: ["pending", "approved", "rejected"], 
            default: "pending" 
        },
        approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
        approvalDate: { type: Date },
        rejectionReason: { type: String }, 
        trainer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
        
        syllabus: [{ 
            title: { type: String, required: true },
            description: { type: String, required: true }
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../redux/courseSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CourseForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.courses);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    duration: "",
    prerequisites: "",
    courseLevel: "",
    certificationAvailable: false,
    thumbnail: null,
  });

  const [lessons, setLessons] = useState([]);
  const [syllabus, setSyllabus] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSyllabusChange = (index, field, value) => {
    const updatedSyllabus = syllabus.map((item, i) =>
      i === index ? { ...item, [field]: value } : item,
    );
    setSyllabus(updatedSyllabus);
  };

  const addSyllabusItem = () => {
    setSyllabus([...syllabus, { title: "", description: "" }]);
  };

  const handleLessonChange = (index, field, value) => {
    const updatedLessons = lessons.map((lesson, i) =>
      i === index ? { ...lesson, [field]: value } : lesson,
    );
    setLessons(updatedLessons);
  };

  const handleLessonFileChange = (index, file) => {
    const updatedLessons = lessons.map((lesson, i) =>
      i === index ? { ...lesson, video: file } : lesson,
    );
    setLessons(updatedLessons);
  };

  const addLesson = () => {
    setLessons([
      ...lessons,
      {
        title: "",
        description: "",
        video: null,
        order: lessons.length + 1,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      syllabus.some((item) => !item.title.trim() || !item.description.trim())
    ) {
      toast.warning("Each syllabus item must have a title and description.");
      return;
    }

    const courseData = new FormData();

    for (const key in formData) {
      if (formData[key]) {
        if (key === "certificationAvailable") {
          courseData.append(key, formData[key] ? "true" : "false");
        } else {
          courseData.append(key, formData[key]);
        }
      }
    }

    lessons.forEach((lesson, index) => {
      courseData.append(`lessons[${index}][title]`, lesson.title);
      courseData.append(`lessons[${index}][description]`, lesson.description);
      courseData.append(`lessons[${index}][order]`, lesson.order);
      if (lesson.video) {
        courseData.append(`lessonVideos`, lesson.video);
      }
    });

    syllabus.forEach((item, index) => {
      courseData.append(`syllabus[${index}][title]`, item.title);
      courseData.append(`syllabus[${index}][description]`, item.description);
    });

    dispatch(createCourse(courseData))
      .then(() => {
        toast.success(
          "Course submitted successfully! 🚀\nYour course is now under review. Please wait for admin approval.",
        );
        navigate("/profile");
      })
      .catch((err) => {
        toast.error(`❌ Error: ${err.message || "Failed to create course"}`);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 my-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="prerequisites"
          placeholder="Prerequisites"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          className="w-full p-2 border rounded"
          name="courseLevel"
          required
          value={formData.courseLevel}
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Select Course Level
          </option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advance">Advance</option>
        </select>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="certificationAvailable"
            onChange={handleChange}
          />
          <span>Certification Available</span>
        </label>

        <label className="block">
          Thumbnail:
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </label>

        <h3 className="text-lg font-semibold">Course Syllabus</h3>
        {syllabus.map((item, index) => (
          <div key={index} className="p-4 border rounded mt-2">
            <input
              type="text"
              placeholder="Enter syllabus title (e.g., Introduction to JavaScript)"
              value={item.title}
              onChange={(e) =>
                handleSyllabusChange(index, "title", e.target.value)
              }
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Provide a brief description of this syllabus"
              value={item.description}
              onChange={(e) =>
                handleSyllabusChange(index, "description", e.target.value)
              }
              required
              className="w-full p-2 border rounded mt-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addSyllabusItem}
          className="w-full p-2 bg-blue-500 text-white rounded mt-2"
        >
          + Add New Syllabus Section
        </button>

        <h3 className="text-lg font-semibold mt-6">Course Lessons</h3>
        {lessons.map((lesson, index) => (
          <div key={index} className="p-4 border rounded mt-2">
            <input
              type="text"
              placeholder="Enter lesson title (e.g., Basics of HTML)"
              value={lesson.title}
              onChange={(e) =>
                handleLessonChange(index, "title", e.target.value)
              }
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Provide a detailed description of this lesson"
              value={lesson.description}
              onChange={(e) =>
                handleLessonChange(index, "description", e.target.value)
              }
              className="w-full p-2 border rounded mt-2"
            />
            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleLessonFileChange(index, e.target.files[0])}
              className="w-full p-2 mt-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addLesson}
          className="w-full p-2 bg-green-500 text-white rounded mt-2"
        >
          + Add New Lesson
        </button>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          {loading ? "Creating..." : "Create Course"}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;

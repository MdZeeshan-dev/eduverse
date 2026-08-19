import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExams,
  updateExam,
  updateQuestion,
  addQuestions,
} from "../redux/examSlice";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditExamPage = () => {
  const { examId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { exams, loading, error } = useSelector((state) => state.exam);

  const [examData, setExamData] = useState({
    title: "",
    code: "",
    subject: "",
    category: "",
    timeLimit: "",
    numQuestions: "",
    totalMarks: "",
    type: "Practice Test",
  });

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!exams.length) {
      dispatch(fetchExams());
    } else {
      const selectedExam = exams.find((exam) => exam._id === examId);
      if (selectedExam) {
        setExamData({
          title: selectedExam.title || "",
          duration: selectedExam.duration || 0,
          description: selectedExam.description || "",
          code: selectedExam.code || "",
          subject: selectedExam.subject || "",
          category: selectedExam.category || "",
          timeLimit: selectedExam.timeLimit || "",
          numQuestions: selectedExam.numQuestions || "",
          totalMarks: selectedExam.totalMarks || "",
          type: selectedExam.type || "Practice Test",
        });
        setQuestions(selectedExam.questions || []);
      }
    }
  }, [dispatch, exams, examId]);

  const handleExamChange = (e) => {
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [field]: value || (field === "options" ? ["", "", "", ""] : ""),
    };
    setQuestions(updatedQuestions);
  };

  const addNewQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionId: "",
        text: "",
        options: ["", "", "", ""],
        correctOption: 0,
      },
    ]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateExam({ examId, updatedData: examData })).unwrap();

      const updatedQuestions = questions.filter((q) => q.text.trim() !== "");

      if (updatedQuestions.length) {
        const existingQuestions = updatedQuestions.filter((q) => q.questionId);
        const newQuestions = updatedQuestions.filter((q) => !q.questionId);

        for (const question of existingQuestions) {
          await dispatch(
            updateQuestion({
              questionId: question.questionId,
              updatedData: question,
            }),
          ).unwrap();
        }

        if (newQuestions.length) {
          await dispatch(
            addQuestions({ examId, questions: newQuestions }),
          ).unwrap();
        }
      }

      toast.success("Exam and questions updated successfully!");
      navigate("/exams");
    } catch (error) {
      toast.error("Error updating exam: " + error.message);
    }
  };

  if (loading) return <p>Loading exam details...</p>;
  if (error) {
    const errorMessage =
      typeof error === "string" ? error : JSON.stringify(error);
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Exam</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ✅ Exam Details */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={examData.title}
            onChange={handleExamChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Exam Code
          </label>
          <input
            className="input-field px-2 py-1 outline w-full"
            type="text"
            name="code"
            placeholder="Enter a unique exam code (e.g., JBT101)"
            value={examData.code}
            onChange={handleExamChange}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Subject
            </label>
            <input
              className="input-field px-2 py-1 outline w-full"
              type="text"
              name="subject"
              placeholder="Enter the subject (e.g., Computer Science)"
              value={examData.subject}
              onChange={handleExamChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Category
            </label>
            <input
              className="input-field px-2 py-1 outline w-full"
              type="text"
              name="category"
              placeholder="Specify the category (e.g., Beginner, Intermediate)"
              value={examData.category}
              onChange={handleExamChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Time Limit (in minutes)
            </label>
            <input
              className="input-field px-2 py-1 outline w-full"
              type="number"
              name="timeLimit"
              placeholder="Set time limit (e.g., 60)"
              value={examData.timeLimit}
              onChange={handleExamChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Number of Questions
            </label>
            <input
              className="input-field px-2 py-1 outline w-full"
              type="number"
              name="numQuestions"
              placeholder="Enter number of questions (e.g., 20)"
              value={examData.numQuestions}
              onChange={handleExamChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Total Marks
            </label>
            <input
              className="input-field px-2 py-1 outline w-full"
              type="number"
              name="totalMarks"
              placeholder="Enter total marks (e.g., 100)"
              value={examData.totalMarks}
              onChange={handleExamChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">
            Select Exam Type
          </label>
          <select
            className="input-field px-2 py-1 outline w-full"
            name="type"
            value={examData.type}
            onChange={handleExamChange}
          >
            <option value="Practice Test">Practice Test</option>
            <option value="Certification Exam">Certification Exam</option>
          </select>
        </div>

        <h3 className="text-xl font-bold mt-6">Questions</h3>
        {questions.map((question, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <input
              type="text"
              placeholder="Enter question text"
              value={question.text}
              onChange={(e) =>
                handleQuestionChange(index, "text", e.target.value)
              }
              className="w-full p-2 border rounded mb-2"
              required
            />
            {question.options.map((option, optIndex) => (
              <input
                key={optIndex}
                type="text"
                placeholder={`Option ${optIndex + 1}`}
                value={option}
                onChange={(e) => {
                  const updatedOptions = [...question.options];
                  updatedOptions[optIndex] = e.target.value;
                  handleQuestionChange(index, "options", updatedOptions);
                }}
                className="w-full p-2 border rounded mb-1"
                required
              />
            ))}
            <select
              value={question.correctOption ?? 0}
              onChange={(e) =>
                handleQuestionChange(
                  index,
                  "correctOption",
                  parseInt(e.target.value, 10),
                )
              }
              className="w-full p-2 border rounded mb-2"
            >
              {question.options?.map((option, optIndex) => (
                <option key={optIndex} value={optIndex}>
                  {option || `Option ${optIndex + 1}`}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => removeQuestion(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove Question
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addNewQuestion}
          className="bg-blue-600 text-white px-4 py-2 mr-5"
        >
          Add New Question
        </button>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditExamPage;

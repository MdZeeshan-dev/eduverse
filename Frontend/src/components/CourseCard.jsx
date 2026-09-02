import React from "react";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";

function CourseCard({ image, category, heading, level, duration, link }) {
  return (
    <Link to={link} className="group">
      <div className="bg-white min-h-80 shadow-lg overflow-hidden transition-all group-hover:shadow-2xl border-[1px] border-gray-300 p-4 group-hover:scale-105">
        {/* Course Image */}
        <div className="w-full overflow-h
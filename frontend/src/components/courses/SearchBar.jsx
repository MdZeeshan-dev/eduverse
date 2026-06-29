import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search courses, instructors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-14 pr-5 text-gray-700 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
};

export default SearchBar;
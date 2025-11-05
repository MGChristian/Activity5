import React, { useState } from "react";
import Hero from "../components/Hero";
import MainContainer from "../components/MainContainer";
import BlogCard from "../components/BlogCards";
import Pagination from "../components/Pagination";

function Main() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    "Commercial",
    "Design",
    "Nature",
    "People",
    "Photography",
    "Tech",
    "Travel",
    "Uncategorized",
  ];

  const blogs = [
    {
      image: "/image.png",
      title: "The Art of Writing Simply",
      author: "Jane Doe",
      date: "Nov 5, 2025",
      description:
        "Writing doesn’t have to be complicated. Learn how simplicity can make your message clearer and more powerful.",
      category: "Design",
    },
    {
      image: "/image.png",
      title: "The Art of Writing Simply",
      author: "Jane Doe",
      date: "Nov 5, 2025",
      description:
        "Writing doesn’t have to be complicated. Learn how simplicity can make your message clearer and more powerful.",
      category: "Design",
    },
    {
      image: "/image.png",
      title: "Design That Speaks",
      author: "John Smith",
      date: "Oct 30, 2025",
      description:
        "Explore how great design communicates without words — and why minimalism is more than an aesthetic choice.",
      category: "Commercial",
    },
    {
      image: "/image.png",
      title: "Why Code Quality Matters",
      author: "Ava Lopez",
      date: "Oct 25, 2025",
      description:
        "Clean code isn’t just for readability — it’s the foundation of scalable, maintainable, and secure software.",
      category: "Tech",
    },
  ];

  const blogsPerPage = 3;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Slice blogs for current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  // Filter blogs by selected category
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div>
      <Hero />
      <MainContainer>
        {/* Categories Section */}
        <div className="mx-auto max-w-[1200px] px-6 py-8 border-b border-b-gray-300">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} id={index} />
          ))}
        </div>

        {/* Pagination Section */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </MainContainer>
    </div>
  );
}

export default Main;

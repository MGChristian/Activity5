import React, { useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../contexts/AuthProvider";
import MainContainer from "../components/MainContainer";
import CommentSection from "../components/CommentSection";

function Blog() {
  const { blogId } = useParams();
  const { id } = useAuth();

  const [blog, setBlog] = useState({
    id: blogId,
    title: "The Art of Writing Simply",
    subtitle:
      "Writing doesn’t have to be complicated. Learn how simplicity can make your message clearer and more powerful.",
    picture: "/image.png",
    content:
      "This is where your blog content would go. You can later replace this with markdown or a rich text editor.",
    comments: [
      {
        id: 1,
        userId: 101,
        userName: "Sofia Reyes",
        content:
          "Loved this post! The part about simplifying sentences really resonated with me.",
        date: "Nov 1, 2025",
      },
      {
        id: 2,
        userId: 102,
        userName: "Miguel Santos",
        content:
          "This reminded me to stop over-editing my drafts 😅 Thanks for sharing!",
        date: "Nov 2, 2025",
      },
      {
        id: 3,
        userId: 103,
        userName: "Hannah Cruz",
        content:
          "Can you make a follow-up about writing for technical audiences? Would love that!",
        date: "Nov 3, 2025",
      },
      {
        id: 4,
        userId: 104,
        userName: "David Lee",
        content:
          "Short, simple, and straight to the point — just like good writing should be.",
        date: "Nov 4, 2025",
      },
      {
        id: 5,
        userId: 105,
        userName: "Anna Gomez",
        content:
          "I’ve started applying this to my blog drafts, and it really helps clarity!",
        date: "Nov 5, 2025",
      },
    ],
  });

  const [isOwner, setIsOwner] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saving blog:", blog);
    // 🔜 axios.put(`/api/blogs/${blogId}`, blog);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toggle owner for testing */}
      <button
        onClick={() => setIsOwner(!isOwner)}
        className="m-4 px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
      >
        Toggle Owner View
      </button>

      {/* ✅ OWNER VIEW */}
      {isOwner ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="flex flex-col h-full"
        >
          {/* Save Button */}
          <div className="flex justify-end px-6 py-3 bg-orange-400 border-b">
            <button
              type="submit"
              className="px-5 py-2 text-white rounded-md text-sm font-medium hover:bg-orange-500"
            >
              Save Changes
            </button>
          </div>

          {/* Editable Cover Section */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={blog.picture}
              alt="Blog Cover"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
              <input
                type="text"
                name="title"
                value={blog.title}
                onChange={handleChange}
                placeholder="Blog Title"
                className="text-4xl sm:text-5xl font-bold bg-transparent border-none text-center focus:outline-none drop-shadow-2xl"
              />
              <textarea
                name="subtitle"
                value={blog.subtitle}
                onChange={handleChange}
                onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                placeholder="Short subtitle"
                className="mt-3 text-lg w-7xl bg-transparent border-none text-center focus:outline-none drop-shadow-lg resize-none"
              />
            </div>
          </div>

          <MainContainer>
            {/* Editable Blog Content */}
            <div className="bg-white px-4 flex-1 border-x border-x-gray-300 mx-auto w-full flex flex-col gap-4 pt-4 min-h-[calc(100vh-20rem)]">
              <div>
                <h1 className="font-bold text-gray-900 mb-2">
                  {blog.title || "Untitled Blog"}
                </h1>
                <p className="text-sm text-gray-500">
                  by{" "}
                  <span className="font-medium text-gray-700">
                    {blog.author || "Unknown Author"}
                  </span>{" "}
                  · {blog.date || "Nov 5, 2025"}
                </p>
              </div>

              <textarea
                name="content"
                value={blog.content}
                onChange={(e) => {
                  handleChange(e);
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                rows={1}
                placeholder="Write your blog content here..."
                className="w-full font-medium focus:outline-none resize-y"
              />

              <CommentSection
                comments={blog.comments || []}
                onAddComment={(newComment) =>
                  setBlog((prev) => ({
                    ...prev,
                    comments: [...(prev.comments || []), newComment],
                  }))
                }
              />
            </div>
          </MainContainer>
        </form>
      ) : (
        /* ✅ READER VIEW (same structure, but read-only) */
        <div className="flex flex-col h-full">
          {/* Static Header (no save button) */}
          <div className="flex justify-end px-6 py-3 bg-orange-400 border-b">
            <p className="text-white text-sm font-medium italic">
              Viewing as reader
            </p>
          </div>

          {/* Cover Section */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={blog.picture}
              alt="Blog Cover"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
              <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-2xl">
                {blog.title}
              </h1>
              <p className="mt-3 text-lg max-w-3xl drop-shadow-lg">
                {blog.subtitle}
              </p>
            </div>
          </div>

          <MainContainer>
            {/* Same layout as owner */}
            <div className="bg-white px-4 flex-1 border-x border-x-gray-300 mx-auto w-full flex flex-col gap-4 pt-4 min-h-[calc(100vh-20rem)]">
              <div>
                <h1 className="font-bold text-gray-900 mb-2">{blog.title}</h1>
                <p className="text-sm text-gray-500">
                  by{" "}
                  <span className="font-medium text-gray-700">
                    {blog.author || "Unknown Author"}
                  </span>{" "}
                  · {blog.date || "Nov 5, 2025"}
                </p>
              </div>

              {/* Static text instead of textarea */}
              <div className="whitespace-pre-wrap text-gray-800 font-medium">
                {blog.content}
              </div>

              {/* Comments (still addable) */}
              <CommentSection
                comments={blog.comments}
                onAddComment={(newComment) =>
                  setBlog((prev) => ({
                    ...prev,
                    comments: [...(prev.comments || []), newComment],
                  }))
                }
              />
            </div>
          </MainContainer>
        </div>
      )}
    </div>
  );
}

export default Blog;

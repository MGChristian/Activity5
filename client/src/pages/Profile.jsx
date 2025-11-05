import React, { useState } from "react";
import MainContainer from "../components/MainContainer";
import BlogCard from "../components/BlogCards"; // make sure this import exists

function Profile() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      userId: 1,
      title: "The Art of Writing Simply",
      subtitle:
        "Writing doesn’t have to be complicated. Learn how simplicity can make your message clearer and more powerful.",
      //content
      picture: "/image.png",
      date: "Nov 5, 2025",
      category: "Design",

      //from other tables
      username: "us",
    },
    {
      id: 2,
      userId: 1,
      picture: "/image.png",
      title: "Design That Speaks",
      username: "John Smith",
      date: "Oct 30, 2025",
      subtitle:
        "Explore how great design communicates without words — and why minimalism is more than an aesthetic choice.",
      category: "Commercial",
    },
    {
      id: 3,
      userId: 1,
      picture: "/image.png",
      title: "Why Code Quality Matters",
      username: "Ava Lopez",
      date: "Oct 25, 2025",
      subtitle:
        "Clean code isn’t just for readability — it’s the foundation of scalable, maintainable, and secure software.",
      category: "Tech",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", formData);
    // later: send this to backend via axios
  };

  return (
    <MainContainer>
      <div className="mx-auto px-6 py-10 flex flex-col gap-10 w-full">
        {/* Profile Info Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Profile Information
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-md shadow-sm p-6 flex flex-col gap-6"
          >
            {/* Profile Picture + Info */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Picture */}
              <div className="flex flex-col items-center sm:items-start gap-3 justify-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="/default-avatar.png"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100"
                >
                  Change Photo
                </button>
              </div>

              {/* Name + Username */}
              <div className="flex flex-col flex-1 gap-4">
                {/* Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                {/* Username */}
                <div className="flex flex-col">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="flex flex-col">
              <label
                htmlFor="about"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                About Me
              </label>
              <textarea
                name="about"
                id="about"
                value={formData.about}
                onChange={handleChange}
                rows="4"
                placeholder="Write something about yourself..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* My Posts Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">My Posts</h2>

            {posts.length !== 0 && (
              <button
                type="button"
                onClick={() => console.log("Create Post clicked")} // 🔜 Replace with navigation or modal open logic
                className="flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm  hover:bg-gray-800 transition-all duration-200"
              >
                <span>＋</span>
                Create Post
              </button>
            )}
          </div>

          {/* Posts List (Backend-Ready) */}
          {posts.length === 0 ? (
            <div className="border border-gray-200 rounded-xl bg-white p-6 text-gray-600 text-sm flex flex-col items-center justify-center gap-3">
              <p>You haven’t created any posts yet.</p>
              <button
                type="button"
                onClick={() => console.log("Create Post clicked")} // 🔜 Backend-ready
                className="mt-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200"
              >
                Create Your First Post
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </MainContainer>
  );
}

export default Profile;

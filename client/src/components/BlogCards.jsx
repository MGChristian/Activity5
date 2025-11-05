import { Link } from "react-router-dom";

function BlogCard({ picture, title, username, date, subtitle, id }) {
  return (
    <Link
      to={`/main/blog/${id}`}
      className="bg-white border border-gray-300 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* picture container */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={picture || "/blog-placeholder.jpg"}
          alt={title || "Blog thumbnail"}
          className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Blog content */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          {title || "Untitled Blog"}
        </h2>

        <p className="text-sm text-gray-500 mb-3">
          by{" "}
          <span className="font-medium text-gray-700">
            {username || "Unknown username"}
          </span>{" "}
          · {date || "No Date"}
        </p>

        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {subtitle ||
            "No subtitle available. Add a short preview of your blog content here to engage readers."}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;

import React, { useState } from "react";

function CommentSection({
  comments = [],
  onAddComment,
  blogId,
  username,
  userId,
}) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (!newComment.trim()) return;

    // 🔜 Could be replaced with axios.post(`/api/blogs/${id}/comments`, { content: newComment })
    const comment = {
      id: Date.now(),
      userId: "",
      userName: "You", // Replace with logged-in user later
      content: newComment,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    //handle add comment

    onAddComment(comment);
    setNewComment("");
  };

  return (
    <div className="bg-gray-100 rounded-md p-4 mt-4">
      <h3 className="text-md font-semibold text-gray-800 mb-3">Comments</h3>

      {/* Existing Comments */}
      <div className="space-y-3 mb-4">
        {comments.length === 0 ? (
          <p className="text-sm text-gray-500">
            No comments yet. Be the first!
          </p>
        ) : (
          comments.map((c) => (
            <div
              key={c.id}
              className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-800">{c.userName}</p>
              <p className="text-sm text-gray-600 mt-1">{c.content}</p>
              <p className="text-xs text-gray-400 mt-2">{c.date}</p>
            </div>
          ))
        )}
      </div>

      {/* Add New Comment */}
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        rows="2"
        className="w-full text-sm p-2 border border-gray-300 rounded-md resize-none"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="self-end px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white text-sm rounded-md transition-all"
      >
        Post Comment
      </button>
    </div>
  );
}

export default CommentSection;

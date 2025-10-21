import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          React Physical Therapy Comment 2025
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">
          Welcome to React Physical Therapy Comment 2025
        </h2>
        <p className="text-gray-700 mb-6">
          This is a sample application to demonstrate a React setup.
        </p>
        
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-3">Leave a Comment</p>
          <input
            type="text"
            placeholder="Your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition-colors"
          >
            Submit
          </button>
        </div>

        {comments.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Comments:</h3>
            <div className="space-y-2">
              {comments.map((c, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-md p-3 text-gray-700"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleRefresh = () => {
    console.log("Refreshing all data...");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (

    <div className="flex h-screen">
      {/* Hamburger Button */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-blue-500 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        <i className="fas fa-bars"></i>
      </button>
      <aside
  className={`fixed top-0 left-0 w-full md:w-64 z-40 md:static md:h-full bg-gray-100 p-4 transform ${
    isSidebarOpen ? "translate-y-0" : "-translate-y-full"
  } transition-transform duration-300 md:translate-y-0`}
>

        <div className="flex items-center space-x-3 mb-6">
          <img
            src="codeant.jpg" // Replace with the actual path to your logo
            alt="CodeAnt Logo"
            className="w-8 h-8"
          />
          <h2 className="text-xl font-bold">CodeAnt AI</h2>
        </div>

        {/* User Dropdown */}
        <div className="relative mb-6">
          <button className="flex items-center justify-between w-full px-3 py-2 border rounded-lg bg-white text-gray-700 shadow-sm">
            <span>John Doe</span> 
            <i className="fas fa-chevron-down text-gray-500"></i>
          </button>
          <ul className="absolute left-0 w-[90%] bg-white border rounded-xl mt-2 shadow-lg hidden">
            <li className="px-4 py-2 hover:bg-gray-100 rounded-xl">
               Profile
             </li>
             <li className="px-4 py-2 hover:bg-gray-100 rounded-xl">
               Logout
             </li>
           </ul>
        </div>

        <ul className="space-y-4">
          <li className="flex items-center space-x-2 font-medium h-10 bg-blue-500 rounded text-black">
            <i className="fas fa-code-branch"></i>
            <span>Repositories</span>
          </li>
          <li className="flex items-center space-x-2 font-medium text-gray-600">
            <i className="fas fa-robot"></i>
            <span>AI Code Review</span>
          </li>
          <li className="flex items-center space-x-2 font-medium text-gray-600">
            <i className="fas fa-cloud"></i>
            <span>Cloud Security</span>
          </li>
          <li className="flex items-center space-x-2 font-medium text-gray-600">
            <i className="fas fa-question-circle"></i>
            <span>How to Use</span>
          </li>
          <li className="flex items-center space-x-2 font-medium text-gray-600">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Repositories</h1>
          <div className="flex space-x-4">
          <button
  onClick={handleRefresh}
  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hidden md:flex"
>
  <i className="fas fa-sync-alt mr-2"></i>
  Refresh All
</button>
<button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hidden md:flex">
  <i className="fas fa-plus mr-2"></i>
  Add Repository
</button>

          </div>
        </div>

        <div className="mb-2">
          <p className="text-sm text-gray-500">355 total repositories</p>
        </div>

        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full mb-6 p-2 border rounded-md"
        />

        <div className="space-y-4">
          {[
            {
              name: "design-system",
              visibility: "Public",
              type: "React",
              size: "7320 KB",
              updated: "1 day ago",
            },
            {
              name: "codeant-ci-app",
              visibility: "Private",
              type: "Javascript",
              size: "5871 KB",
              updated: "2 days ago",
            },
            {
              name: "analytics-dashboard",
              visibility: "Private",
              type: "Python",
              size: "4521 KB",
              updated: "5 days ago",
            },
            {
              name: "mobile-app",
              visibility: "Public",
              type: "Swift",
              size: "3096 KB",
              updated: "3 days ago",
            },
            {
              name: "e-commerce-platform",
              visibility: "Private",
              type: "Java",
              size: "6210 KB",
              updated: "6 days ago",
            },
         ].map((repo, index) => (
            <div
              key={index}
              className="p-4 border rounded-md shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{repo.name}</h3>
                <p className="text-sm text-gray-500">
                  {repo.type} • {repo.size}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    repo.visibility === "Public"
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {repo.visibility}
                </span>
                <p className="text-sm text-gray-500 mt-1">Updated {repo.updated}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

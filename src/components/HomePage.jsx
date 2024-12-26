// import React from 'react';
// import './HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       {/* Left Section */}
//       <div className="left-section">
//         <h2>AI to Detect & Autofix Bad Code</h2>

//         <div className="stats-card">
//           <div className="stats">
//             <p>30+<br />Language Support</p>
//             <p>10K+<br />Developers</p>
//             <p>100K+<br />Hours Saved</p>
//           </div>
//         </div>

//         <div className="stats-card issues-card">
//           <div className="issues-left">
//             <div className="icon-placeholder">
//               <svg viewBox="0 0 36 36" className="pie-chart-icon">
//                 <circle cx="18" cy="18" r="15" fill="#e5e7eb" />
//                 <circle
//                   cx="18"
//                   cy="18"
//                   r="15"
//                   fill="transparent"
//                   stroke="#0ea5e9"
//                   strokeWidth="1"
//                   strokeDasharray="85 100"
//                 />
//               </svg>
//               <p id="para">Issues Fixed</p>
//             </div>
//           </div>
//           <div className="growth">
//             <p>↑ 14% </p>
//             <p className="this">This week</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="right-section">
//         <div className="signup-card">
//           <h1>Welcome to CodeAnt AI</h1>
//           <div className="tabs">
//             <button className="active-tab">SAAS</button>
//             <button>Self Hosted</button>
//           </div>
//           <button>
//             <i className="fab fa-github"></i> Sign in with Github
//           </button>
//           <button>
//             <i className="fab fa-bitbucket"></i> Sign in with Bitbucket
//           </button>
//           <button>
//             <i className="fas fa-cloud"></i> Sign in with Azure Devops
//           </button>
//           <button>
//             <i className="fab fa-gitlab"></i> Sign in with GitLab
//           </button>
//         </div>
//         <p className="privacy-note">
//           By signing up you agree to the <a href="#privacy">Privacy Policy</a>.
//         </p>
//       </div>

//       {/* Watermark */}
//       <div className="watermark">
//         <img
//           src="./codeant.jpg"
//           alt="CodeAnt AI Logo"
//           className="watermark-image"
//         />
//         <span>© CodeAnt AI 2024</span>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">
          AI to Detect & Autofix Bad Code
        </h2>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between text-center">
            <p className="text-lg font-semibold text-gray-800">
              30+<br />
              <span className="text-sm font-normal text-gray-600">
                Language Support
              </span>
            </p>
            <p className="text-lg font-semibold text-gray-800">
              10K+<br />
              <span className="text-sm font-normal text-gray-600">
                Developers
              </span>
            </p>
            <p className="text-lg font-semibold text-gray-800">
              100K+<br />
              <span className="text-sm font-normal text-gray-600">
                Hours Saved
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <svg
              viewBox="0 0 36 36"
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="15" fill="#e5e7eb" />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="transparent"
                stroke="#0ea5e9"
                strokeWidth="3"
                strokeDasharray="85 100"
              />
            </svg>
            <p className="text-gray-800 text-lg">Issues Fixed</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-green-600">↑ 14%</p>
            <p className="text-sm text-gray-600">This week</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to CodeAnt AI
          </h1>
          <div className="flex justify-center gap-4 mb-4">
            <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-800">
              SAAS
            </button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white">
              Self Hosted
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
              <i className="fab fa-github"></i> Sign in with Github
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
              <i className="fab fa-gitlab"></i> Self Hosted GitLab
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
              <i className="fas fa-cloud"></i> Sign in with Azure DevOps
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          By signing up you agree to the{" "}
          <a href="#privacy" className="text-blue-600">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-gray-300 text-sm">
        <img
          src="./codeant.jpg"
          alt="CodeAnt AI Logo"
          className="w-6 h-6 object-contain"
        />
        <span>© CodeAnt AI 2024</span>
      </div>
    </div>
  );
};

export default HomePage;


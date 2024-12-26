// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGitlab } from "@fortawesome/free-brands-svg-icons";

// const HomePage = () => {
//   return (
//     <div className="bg-white">
//     <div className="flex flex-col lg:flex-row items-center justify-between p-6 min-h-screen bg-white">
//       <div className="relative">
//   {/* Parent Card */}
//   <div className="bg-white mt-[-180px] shadow-md rounded-lg px-16 py-8 flex flex-col items-start ml-40">
//     <h2 className="text-gray-800 font-bold text-xl mb-4 ">
//       AI to Detect & Autofix Bad Code
//     </h2>
//     <div className="flex gap-4">
//       <div className="text-center">
//         <p className="text-gray-800 font-bold text-2xl">30+</p>
//         <p className="text-gray-600 text-sm">Language Support</p>
//       </div>
//       <div className="text-center">
//         <p className="text-gray-800 font-bold text-2xl">10K+</p>
//         <p className="text-gray-600 text-sm">Developers</p>
//       </div>
//       <div className="text-center">
//         <p className="text-gray-800 font-bold text-2xl">100K+</p>
//         <p className="text-gray-600 text-sm">Hours Saved</p>
//       </div>
//     </div>
//   </div>

//   {/* Overlapping Card */}
//   <div className="bg-white shadow-md ml-32 rounded-lg py-6 px-6 w-1/2 absolute -bottom-26 left-1/2 transform -translate-x-1/2 flex items-center justify-between">
  
//   <div className="flex flex-col items-center gap-1">
//   <svg
//     viewBox="0 0 36 36"
//     className="w-12 h-12"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle cx="18" cy="18" r="15" fill="#e5e7eb" />
//     <circle
//       cx="18"
//       cy="18"
//       r="15"
//       fill="transparent"
//       stroke="#0ea5e9"
//       strokeWidth="3"
//       strokeDasharray="85 100"
//     />
//   </svg>
//   <p className="text-gray-800 text-lg">Issues Fixed</p>
// </div>

//   <div className="text-right">
//     <p className="text-xl font-bold text-green-600">↑ 14%</p>
//     <p className="text-sm text-gray-600">This week</p>
//   </div>
  
// </div>

// </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 flex flex-col items-center  min-h-screen bg-gray-50"> 
//         <div className="bg-white shadow-md mt-36 rounded-lg w-full max-w-md px-8 py-16 text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             Welcome to CodeAnt AI
//           </h1>
//           <div className="flex justify-center gap-4 mb-4">
//             <button className="px-12 py-2 rounded-md bg-gray-200 text-gray-800">
//               SAAS
//             </button>
//             <button className="px-14 py-2 rounded-md bg-blue-600 text-white">
//               Self Hosted
//             </button>
//           </div>
//           <div className="flex flex-col gap-2">
//             <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
//               <i className="fab fa-github"></i> Sign in with Github
//             </button>
//             <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
//             <i
//         className="fa-brands fa-bitbucket mr-2"
//         style={{ color: "#74C0FC", fontSize: "1.2rem" }}
//       ></i> Sign in with BitBucket
//             </button>
//             <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
//             <FontAwesomeIcon
//       icon={faGitlab}
//       style={{ color: "#e2432a", fontSize: "1.5rem" }} // Adjust size and style as needed
//     /> Self Hosted GitLab
//             </button>
//             <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
//             <img
//             src="azure-devops.svg" Replace with the actual path to your logo
//             alt="CodeAnt Logo"
//             className="w-8 h-8"
//           />Sign in with Azure-Devops
//             </button>
//           </div>
//         </div>
//         <p className="text-sm text-gray-500">
//           By signing up you agree to the{" "}
//           <a href="#privacy" className="text-blue-600">
//             Privacy Policy
//           </a>
//           .
//         </p>
//       </div>

//       {/* Watermark */}
//       <div className="absolute bottom-0 left-[-28px] flex items-center gap-2 text-gray-300 text-sm">
//         <img
//           src="./codeant.jpg"
//           alt="CodeAnt AI Logo"
//           className="w-30 h-60 object-contain opacity-30"
//         />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default HomePage;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const [activeOption, setActiveOption] = useState("SAAS");

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between  min-h-screen p-6 bg-white">
        <div className="hidden lg:block relative">
          <div className="bg-white mt-[-180px] shadow-md rounded-lg px-16 py-8 flex flex-col items-start ml-40">
          <h2 className="text-gray-800 font-bold text-xl mb-4 flex items-center gap-2">
  <img src="codeant.jpg" alt="Icon" className="w-6 h-6" />
  AI to Detect & Autofix Bad Code
</h2>

            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-gray-800 font-bold text-2xl">30+</p>
                <p className="text-gray-600 text-sm">Language Support</p>
              </div>
              <div className="text-center">
                <p className="text-gray-800 font-bold text-2xl">10K+</p>
                <p className="text-gray-600 text-sm">Developers</p>
              </div>
              <div className="text-center">
                <p className="text-gray-800 font-bold text-2xl">100K+</p>
                <p className="text-gray-600 text-sm">Hours Saved</p>
              </div>
            </div>
        </div>
        <div className="bg-white shadow-md ml-40 rounded-lg py-4 px-4 w-1/2 absolute -bottom-26 left-1/2 transform -translate-x-1/2 flex items-center justify-between">
  
   <div className="flex flex-col items-center gap-1">
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

  <div className="text-right mt-[-60px] mr-10">
    <p className="text-xs font-bold text-green-600">↑ 14%</p>
    <p className="text-xs text-gray-600">This week</p>
  </div>
  
</div>
</div>

        {/* Right Section - Visible on All Screens */}
        <div className="w-full lg:w-1/2 flex flex-col items-center min-h-screen bg-gray-50">
          <div className="bg-white shadow-md mt-36 rounded-lg w-full max-w-md px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to CodeAnt AI
            </h1>
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => setActiveOption("SAAS")}
                className={`px-12 py-2 rounded-md ${
                  activeOption === "SAAS"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setActiveOption("Self Hosted")}
                className={`px-14 py-2 rounded-md ${
                  activeOption === "Self Hosted"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Self Hosted
              </button>
            </div>
            {activeOption === "SAAS" ? (
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
                  <i className="fab fa-github"></i> Sign in with Github
                </button>
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
                  <i
                    className="fa-brands fa-bitbucket mr-2"
                    style={{ color: "#74C0FC", fontSize: "1.2rem" }}
                  ></i>{" "}
                  Sign in with BitBucket
                </button>
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
                  <FontAwesomeIcon
                    icon={faGitlab}
                    style={{ color: "#e2432a", fontSize: "1.5rem" }}
                  />{" "}
                  Self Hosted GitLab
                </button>
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
                  <img
                    src="azure-devops.svg"
                    alt="Azure DevOps Logo"
                    className="w-8 h-8"
                  />
                  Sign in with Azure-DevOps
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
                  <FontAwesomeIcon
                    icon={faGitlab}
                    style={{ color: "#e2432a", fontSize: "1.5rem" }}
                  />{" "}
                  Self Hosted GitLab
                </button>
                <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 border border-gray-300 flex items-center gap-2 justify-center">
                  <img
                    src="azure-devops.svg"
                    alt="Azure DevOps Logo"
                    className="w-8 h-8"
                  />
                  Sign in with SSO
                </button>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500">
            By signing up you agree to the{" "}
            <a href="#privacy" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Watermark - Hidden on Mobile */}
      <div className="absolute bottom-0 left-[-28px] hidden lg:flex items-center gap-2 text-gray-300 text-sm">
        <img
          src="./codeant.jpg"
          alt="CodeAnt AI Logo"
          className="w-30 h-60 object-contain opacity-30"
        />
      </div>
    </div>
  );
};

export default HomePage;

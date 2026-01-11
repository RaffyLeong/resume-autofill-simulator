import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isCurrentJob, setIsCurrentJob] = useState(false);

  const mockData = {
    firstName: "Ka Fong",
    lastName: "Leong",
    email: "raffy36249@gmail.com",
    phone: "6665 1222",
    school: "Nottingham Trent University",
    degree: "Bachelor of Furniture and Product Design",
    company: "Macau Pass",
    position: "Junior Product Manager",
    startDate: "2025-07",
    endDate: "",
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log("Simulating PDF upload");
    setIsLoading(true);

    setTimeout(() => {
      setFormData({
        firstName: mockData.firstName,
        lastName: mockData.lastName,
        email: mockData.email,
        phone: mockData.phone,
        school: mockData.school,
        degree: mockData.degree,
        company: mockData.company,
        position: mockData.position,
        startDate: mockData.startDate,
        endDate: mockData.endDate,
      });

      setIsCurrentJob(mockData.endDate === "");

      setIsLoading(false);
      console.log("PDF auto-filled with mock data");
    }, 500);
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
    setIsCurrentJob(false);
  };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsCurrentJob(checked);

    if (checked) {
      setFormData((prev) => ({ ...prev, endDate: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    // In real app, you would send data to server here
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto p-8 md:p-8">
        {/* Apply for this job */}
        <div className="mb-10">
          <h1 className="font-bold text-[26px]">Apply for this job</h1>
        </div>

        {/* PDF Upload Card */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white border border-gray-50 rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex justify-start items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Resume/CV
                  <span className="text-red-700">*</span>
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Upload your resume to autofill the form
                </p>
              </div>
            </div>

            {/* File Upload Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <input
                  type="file"
                  id="resume-upload"
                  accept="pdf"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="resume-upload"
                  className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 rounded-lg p-4 cursor-pointer transition-all hover:bg-blue-50"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-blue-600 font-medium">
                        Processing PDF...
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-blue-600 font-medium text-sm">
                        Click to upload resume
                      </span>
                      <span className="text-gray-500 text-xs mt-1">
                        PDF only • Max 5MB
                      </span>
                    </>
                  )}
                </label>
                {/* clear Button */}
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={clearForm}
                    className="px-5 py-2.5 border border-gray-300 text-white bg-blue-600 font-medium rounded-lg hover:bg-blue-700 transition"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />

          {/* Personal information */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 o-3 border-b border-gray-100">
              Personal Information
            </h2>

            {/* Personal information - first name */}
            <div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="First name"
                />
              </div>
            </div>

            {/* Personal information - last name */}
            <div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange("lastName")}
                  className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Personal information - email */}
            <div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Personal information - Phone Number */}
            <div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number <span className="text-red-700">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-1/3">
                    <div className="relative">
                      <select
                        className="w-full px-4 p-2 mb-4 border border-gray-300 rounded-lg 
                     appearance-none bg-white
                    "
                      >
                        <option value="select">select the number</option>
                        <option value="MAC">Macau (+853)</option>
                        <option value="CN">China (+86)</option>
                        <option value="US">United States (+1)</option>
                        <option value="UK">United Kingdom (+44)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white border border-gray-200 rounded-xl p- mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 p-3 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Education</h2>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                Add Another
              </button>
            </div>
            <div className="space-y-6">
              {/* Education - School Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School/University
                </label>
                <input
                  type="text"
                  value={formData.school}
                  onChange={handleInputChange("School")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="School/University"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education - Degree */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Degree
                  </label>
                  <input
                    type="text"
                    value={formData.degree}
                    onChange={handleInputChange("degree")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Degree"
                  />
                </div>

                {/* Education - Discipline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Field of Study
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Field of Study"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white border border-gray-200 rounded-xl p- mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 p-3 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                Add Another
              </button>
            </div>
            <div className="space-y-6">
              {/* Experience - Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange("company")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Experience - Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={handleInputChange("position")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Experience - Current Job Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="workHere"
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                    checked={isCurrentJob}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="workHere"
                    className="ml-2 text-sm text-gray-700"
                  >
                    I currently work here
                  </label>
                </div>

                {/* Experience - Date Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="month"
                      value={formData.startDate}
                      onChange={handleInputChange("startDate")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="month"
                      value={formData.endDate}
                      onChange={handleInputChange("endDate")}
                      disabled={isCurrentJob}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reset / Submit Button */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={clearForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                >
                  Reset Form
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;

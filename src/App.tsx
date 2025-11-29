import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    console.log("Simulating PDF upload")

    setTimeout(() => {
      setFirstName(mockData.firstName);
      setLastName(mockData.lastName);
      setEmail(mockData.email);
      setPhone(mockData.phone);
      setSchool(mockData.school);
      setDegree(mockData.degree);
      setCompany(mockData.company);
      setPosition(mockData.position);
      setStartDate(mockData.startDate);
      setEndDate(mockData.endDate);

      console.log("PDF auto-filled with mock data")
    }, 100)
  };

  
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSchool("");
    setDegree("");
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
  }

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };


  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto p-8 text-left">
        <hr className="my-8 border-gray-300" />
        {/* Apply for this job */}
        <div className="mb-8">
          <h1 className="font-light text-[26px]">Apply for this job</h1>
          <h2 className="text-[14px]">
            <span className="text-red-700">*</span> indicates a required field
          </h2>
        </div>

        <form action="">
          {/* CV - Attach */}
          <label htmlFor="resume" className="text-[14px] font-bold block">
            Resume/CV <span className="text-red-700">*</span>
          </label>
          <br />
          <div className="flex flex-col gap-2 mb-4 w-full max-w-[368px]">
            <input
              type="file"
              id="resume-upload"
              accept=".pdf"
              className="hidden"
              onChange={handleFileUpload}
            />
            <button
              type="button"
              className="mt-2 border border-blue-600 text-blue-600 font-medium text-[16px] px-32 py-2 text-sm hover:bg-gray-50"
              onClick={() => {
                document.getElementById("resume-upload")?.click();
              }}
            >
              Attach
            </button>
            <button
            type="button"
            className="mt-2 border border-blue-600 text-blue-600 font-medium text-[16px] px-32 py-2 text-sm hover:bg-gray-50"
            onClick={clearForm}
            >
              Clear
            </button>

            <h2 className="text-[14px]">Accepted file types: pdf only</h2>
          </div>

          {/* first name */}
          <label htmlFor="firstName" className="text-[14px] font-bold">
            First Names <span className="text-red-700">*</span>
          </label>
          <br />
          <input
            type="text"
            value={firstName}
            onChange={handleInputChange(setFirstName)}
            id="fullName"
            name="fullName"
            autoComplete="given-name"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <br />

          {/* last name */}
          <label htmlFor="lastName" className="text-[14px] font-bold">
            Last Name <span className="text-red-700">*</span>
          </label>
          <br />
          <input
            type="text"
            value={lastName}
            onChange={handleInputChange(setLastName)}
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <br />

          {/* email */}
          <label htmlFor="email" className="text-[14px] font-bold">
            Email <span className="text-red-700">*</span>
          </label>
          <br />
          <input
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            id="email"
            name="email"
            autoComplete="email"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <br />

          {/* phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="text-[14px] font-bold mt-4 block">
              Phone
            </label>
            <div className="flex gap-2"></div>
            <select
              name="country"
              id="country"
              className="border border-gray-200 p-2 flex-1"
            >
              <option value="US">United States (+1)</option>
              <option value="UK">United Kingdom (+44)</option>
              <option value="CA">Canada (+1)</option>
              <option value="MAC">Macau (+853)</option>
              <option value="CN">China (+86)</option>
            </select>
            <input
              type="tel"
              value={phone}
              onChange={handleInputChange(setPhone)}
              id="phone"
              name="phone"
              autoComplete="tel"
              className="border border-gray-300 p-2 w-full mb-4"
            />
            <hr className="my-8 border-gray-300" />
          </div>
        </form>

        {/* Education */}
        <h1 className="font-light text-[26px]">Education</h1>

        <form action="">
          <label htmlFor="school" className="text-[14px] font-bold">
            School
          </label>
          <input
            type="text"
            value={school}
            onChange={handleInputChange(setSchool)}
            id="schoolName"
            name="schoolName"
            autoComplete="organization"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <br />

          <label htmlFor="degree" className="text-[14px] font-bold">
            Degree
          </label>
          <br />
          <input
            type="text"
            value={degree}
            onChange={handleInputChange(setDegree)}
            id="degree"
            name="degree"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <br />

          <label htmlFor="discipline" className="text-[14px] font-bold">
            Discipline
          </label>
          <br />
          <input
            type="text"
            id="discipline"
            name="discipline"
            autoComplete="off"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <br />
          <button className="underline text-blue-700">Add another</button>
        </form>
        <hr className="my-8 border-gray-300" />

        <h1 className="font-light text-[26px]">Experience</h1>

        <form action="">
          {/* Company */}
          <label htmlFor="company" className="text-[14px] font-bold">
            Company
          </label>
          <br />
          <input
            type="text"
            value={company}
            onChange={handleInputChange(setCompany)}
            id="companyName"
            name="companyName"
            autoComplete="organization"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <br />

          <label htmlFor="position" className="text-[14px] font-bold">
            Position
          </label>
          <br />
          <input
            type="text"
            value={position}
            onChange={handleInputChange(setPosition)}
            id="position"
            name="position"
            autoComplete="organization-title"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <br />
          <input
            type="checkbox"
            id="workHere"
            name="workHere"
            value="workHere"
            className="mr-2 mt-6"
          />
          <label htmlFor="checkbox">I still work here</label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startDate"
                className="text-[14px] font-bold block mb-2"
              >
                Start Date
              </label>
              <input
                type="month"
                value={startDate}
                onChange={handleInputChange(setStartDate)}
                id="startDate"
                name="startDate"
                autoComplete="off"
                className="border border-gray-300 p-2 w-full"
              />
            </div>

            <div>
              <label
                htmlFor="endDate"
                className="text-[14px] font-bold block mb-2"
              >
                End Date
              </label>
              <input
                type="month"
                value={endDate}
                onChange={handleInputChange(setEndDate)}
                id="endDate"
                name="endDate"
                autoComplete="off"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
          </div>
          <button type="button" className="underline text-blue-700 mt-4">
            Add another
          </button>
        </form>
        <hr className="my-8 border-gray-300" />
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Bar, Pie, Line } from "react-chartjs-2";
import { TbGenderBigender } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { students } from "../utils/Data/Students";
import { studentTermScores, options } from "../utils/Visuals/StudentBarChart";
import { getTermScores } from "../utils/Visuals/StudentPieChart";
import { getSubjectScores, subjects, studentLineOptions } from "../utils/Visuals/StudentLineChart";

const Student = () => {
  const urlParams = useParams();
  // console.log(urlParams);

  // Convert the student id to a number to match the data type in the students array
  const studentId = Number(urlParams.id);
  // console.log(typeof studentId);

  const student = students?.students?.find((student) => student.id == studentId);
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedTerm, setSelectedTerm] = useState("term1_scores");
  
  const barData = studentTermScores(student, selectedSubject);
  const pieData = getTermScores(student, selectedTerm);

  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="rounded-circle bg d-flex justify-content-center align-items-center fw-bold text-white fs-5" style={{width: '60px', height: '60px'}}>
              {student.fName.charAt(0).toUpperCase() + student.oNames.charAt(0).toLowerCase()}
            </div>
            <div className="ms-2">
              <small className="card-text">Admission No {student.admnNo}</small>
              <h5 className="card-title mb-0">{student.fName + " " + student.oNames}</h5>
            </div>
          </div>

          <div className="mt-4 px-2">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gap-2">
              <div className="border-item col-lg-3 col-md-12 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <TbGenderBigender className="fs-5"/>
                  <p className="mb-0">Gender</p>
                </div>
                <span>{student.gender}</span> 
              </div>
              <div className="border-item col-lg-3 col-md-12 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <FaPhone className="fs-5"/>
                  <p className="mb-0">Parent</p>
                </div>
                <span>{student.p_contact}</span> 
              </div>
              <div className="border-item col-lg-3 col-md-12 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <MdEmail className="fs-5"/>
                  <p className="mb-0">Parent</p>
                </div>
                <span>{student.p_email}</span> 
              </div>
              <div className="border-item col-lg-3 col-md-12 py-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <CiLocationOn className="fs-5"/>
                  <p className="mb-0">Address</p>
                </div>
                <p className="mb-0">{student.address}</p> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-5">
        <div className="row my-5">
          <div className="col-lg-6 col-md-12 chart-container">
            <div className="align-items-center">
              <h5 className="text-center my-3">Subject Scores per Term</h5>
              <div className="d-flex align-items-center justify-content-center mb-2">
                <label className="me-2">Select subject:</label>
                <select className="form-select w-50" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                  <option value="math">Math</option>
                  <option value="english">English</option>
                  <option value="history">History</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="physics">Physics</option>
                </select>
              </div>
            </div>
            <div className="chart-container">
              <Bar data={barData} options={options}/>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 chart-container mt-5 mt-lg-0">
            <div className="align-items-center">
              <h5 className="text-center my-3">Scores per Term</h5>
              <div className="d-flex align-items-center justify-content-center mb-2">
                <label className="me-2">Select term:</label>
                <select className="form-select w-50" value={selectedTerm} onChange={(e) => setSelectedTerm(e.target.value)}>
                  <option value="term1_scores">Term 1</option>
                  <option value="term2_scores">Term 2</option>
                  <option value="term3_scores">Term 3</option>
                  <option value="term4_scores">Term 4</option>
                </select>
              </div>
            </div>
            <div className="chart-container">
              <Pie data={pieData} />
            </div>
          </div>

        </div>

        <div className="mt-5">
          <h5 className="text-center mb-4">Subject Score Progression Over Terms</h5>
          <div className="row">
            {subjects.map(subject => (
              <div key={subject} className="col-lg-4 col-md-6 col-sm-12 mb-4 line-chart-container">
                <Line data={getSubjectScores(student, subject)} options={studentLineOptions}/>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Student;
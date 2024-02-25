import { useState } from "react";
import { useParams } from "react-router-dom";
import { Bar, Pie, Line } from "react-chartjs-2";

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

  const student = students?.students?.find(
    (student) => student.id == studentId
  );
  // console.log(student);
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedTerm, setSelectedTerm] = useState("term1_scores");
  
  const barData = studentTermScores(student, selectedSubject);
  const pieData = getTermScores(student, selectedTerm);

  return (
    <div>
      <p>Student data to be here</p>
      <div className="form-group row align-items-center">
        <label className="col-sm-2 col-form-label">Select subject:</label>
        <div className="col-sm-2">
          <select className="form-select"  value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            <option value="math">Math</option>
            <option value="english">English</option>
            <option value="history">History</option>
            <option value="chemistry">Chemistry</option>
            <option value="physics">Physics</option>
          </select>
        </div>
      </div>
      <Bar data={barData} options={options}/>

      <div className="form-group row align-items-center">
        <label className="col-sm-2 col-form-label">Select term:</label>
        <div className="col-sm-2">
          <select className="form-select" value={selectedTerm} onChange={(e) => setSelectedTerm(e.target.value)}>
            <option value="term1_scores">Term 1</option>
            <option value="term2_scores">Term 2</option>
            <option value="term3_scores">Term 3</option>
            <option value="term4_scores">Term 4</option>
          </select>
        </div>
      </div>
      <Pie data={pieData} />

      <div>
        {subjects.map(subject => (
          <div key={subject}>
            <Line data={getSubjectScores(student, subject)} options={studentLineOptions}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Student;
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";

import { students } from "../utils/Data/Students";
import { studentTermScores, options } from "../utils/Visuals/StudentTermScores";

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
  const data = studentTermScores(student, selectedSubject);

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
      <Bar data={data} options={options}/>
    </div>
  )
}

export default Student;
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from "chart.js";
import { Pie, Bar, Line } from 'react-chartjs-2';
import { useState } from "react";

import { genderData } from "../utils/Visuals/StudentsPieChart";
import { term1AvgData, term2AvgData, term3AvgData, term4AvgData, options } from "../utils/Visuals/StudentsBarChart";
import { subjects, getLineChartData, lineChartOptions }from "../utils/Visuals/StudentsLineChart";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const termData = {
  1: term1AvgData,
  2: term2AvgData,
  3: term3AvgData,
  4: term4AvgData,
}

const Home = () => {
  const [ selectedTerm, setSelectedTerm ] = useState(1);

  const handleTermChange = (e) => {
    setSelectedTerm(e.target.value);
  }
  
  return (
    <div className="d-flex flex-column align-items-center">
      <p>Grade 8 Analysis Dashbord</p>
      <p>
        Welcome to Grade 8 analysis. This platform provides a comprehensive view of student performance. Here, you can explore various charts that depict the overall performance of all Grade 8 students. Use the dropdown menu to select the term for which you want to view the average scores.
      </p> 
      <p>
        If you&apos;re interested in more detailed data, you can select a specific student and view their performance data, including term-by-term scores and subject-wise averages. 
      </p>
      <p>
        We encourage you to explore the data and gain insights into student performance. Enjoy your exploration!
      </p>
      <div>
        <div className="d-flex justify-content-between p-4">
          <div className="col-6" style={{ maxWidth: '400px', maxHeight: '400px' }}>
            <Pie data={genderData} />
          </div>
          <div className="col-6"> 
            <div className="d-flex align-items-center">
              <label className="me-2">Select term:</label>
              <select value={selectedTerm} className="form-select w-25" onChange={handleTermChange}>
                <option value={1}>Term 1</option>
                <option value={2}>Term 2</option>
                <option value={3}>Term 3</option>
                <option value={4}>Term 4</option>
              </select>
            </div>
            <div style={{ maxWidth: '600px', maxHeight: '300px' }}>
              <Bar data={termData[selectedTerm]} options={options}></Bar>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap">
        {subjects.map(subject => {
          return (
              <div key={subject} className="col-md-6 col-lg-4">
                <Line key={subject} data={getLineChartData(subject)} options={lineChartOptions} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;
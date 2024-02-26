import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from "chart.js";
import { Pie, Bar, Line } from 'react-chartjs-2';
import { useState } from "react";

import { genderData } from "../utils/Visuals/StudentsPieChart";
import { term1AvgData, term2AvgData, term3AvgData, term4AvgData, options } from "../utils/Visuals/StudentsBarChart";
import { subjects, getLineChartData, lineChartOptions }from "../utils/Visuals/StudentsLineChart";
import "./page.css";

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
    <div className="container pt-3">
      <p className="fw-bold blue fs-3 text-center">Grade 8 Analysis Dashboard</p>
      <div className="text-center px-4">
        <p>
          Welcome to Grade 8 analysis. This platform provides a comprehensive view of student performance. Here, you can explore various charts that depict the overall performance of all Grade 8 students. Use the dropdown menu to select the term for which you want to view the average scores.
        </p> 
        <p>
          If you&apos;re interested in more detailed data, you can select a specific student and view their performance data, including term-by-term scores and subject-wise averages. 
        </p>
        <p>
          We encourage you to explore the data and gain insights into student performance. Enjoy your exploration!
        </p>
      </div>
      <div className="d-flex flex-column gap-5">
        <div className="row my-5">
          <div className="col-lg-6 col-md-12 chart-container">
            <h5 className="text-center mb-4">Gender Distribution</h5>
            <div className="col-12 col-md-10 col-lg-8 mx-auto d-flex justify-content-center align-items-center pie"> 
              <Pie data={genderData} />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 chart-container"> 
            <div className="align-items-center">
              <h5 className="text-center mb-4">Average Scores by Term</h5>
              <div className="d-flex align-items-center justify-content-center mb-2">
                <label className="me-2">Select term:</label>
                <select value={selectedTerm} className="form-select w-25" onChange={handleTermChange}>
                  <option value={1}>Term 1</option>
                  <option value={2}>Term 2</option>
                  <option value={3}>Term 3</option>
                  <option value={4}>Term 4</option>
                </select>
              </div>
            </div>
            <div className="chart-container">
              <Bar data={termData[selectedTerm]} options={options}></Bar>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-center mb-4">Subject Score Progression Over Terms</h5>
          <div className="row">
            {subjects.map(subject => {
              return (
                  <div key={subject} className="col-lg-4 col-md-6 col-sm-12 mb-4 line-chart-container">
                    <Line key={subject} data={getLineChartData(subject)} options={lineChartOptions} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
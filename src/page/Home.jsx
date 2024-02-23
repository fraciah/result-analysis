import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar } from 'react-chartjs-2';
import { genderData, term1AvgData, term2AvgData } from "../utils/Data/Visuals";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const termData = {
  1: term1AvgData,
  2: term2AvgData,
}

const Home = () => {
  const [ selectedTerm, setSelectedTerm ] = useState(1);

  const handleTermChange = (e) => {
    setSelectedTerm(e.target.value);
  }
  
  return (
    <div>
      <p>Home</p>

      <div className="col-6">
        <Pie data={genderData} />
      </div>

      <div>
        <div>
          <label>Select term:</label>
          <select value={selectedTerm} onChange={handleTermChange}>
            <option value={1}>Term 1</option>
            <option value={2}>Term 2</option>
            <option value={3}>Term 3</option>
            <option value={4}>Term 4</option>
          </select>
        </div>
        <Bar data={termData[selectedTerm]}></Bar>
      </div>

    </div>
  )
}

export default Home
